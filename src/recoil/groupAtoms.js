import { atom } from 'recoil';

export const groupsState = atom({
  key: 'groupsState',
  default: [],
});
export const seletGroupIndexState = atom({
  key: 'seletGroupsIndexState',
  default: 0,
});
