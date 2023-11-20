import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { groupState, groupsState } from '../recoil/groupAtoms';
import { useState } from 'react';

const useGroup = (groupId, groupTitle) => {
  const setGroups = useSetRecoilState(groupsState);
  const setGroup = useSetRecoilState(groupState);
  const [newGroupId, setNewGroupId] = useState(0);
  const [groupMembers, setGroupMembers] = useState([]);
  const getGroups = async () => {
    try {
      const result = await axios.get('/group/getall');
      const copyGroups = [...result.data];
      setGroups(copyGroups);
    } catch (error) {
      console.log(error);
    }
  };
  const getGroup = async () => {
    try {
      const result = await axios.get(`/group/get/${groupId}`);
      setGroup(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getGroupmembers = async () => {
    try {
      console.log(groupId);
      const result = await axios.get(`/group/member/get/${groupId}`);
      setGroupMembers(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const createGroup = async () => {
    try {
      const result = await axios.post('/group/create', { groupTitle: groupTitle });
      console.log(result.data);
      setNewGroupId(result.data.groupId);
      getGroups();
    } catch (error) {
      console.log(error);
    }
  };

  return { getGroups, getGroup, getGroupmembers, groupMembers, createGroup };
};

export default useGroup;
