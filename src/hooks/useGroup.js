import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { groupsState } from '../recoil/groupAtoms';

const useGroup = () => {
  const setGroups = useSetRecoilState(groupsState);
  const getGroups = async () => {
    try {
      const result = await axios.get('/group/getall');
      const copyGroups = [...result.data];
      setGroups(copyGroups);
    } catch (error) {
      console.log(error);
    }
  };

  return { getGroups };
};

export default useGroup;
