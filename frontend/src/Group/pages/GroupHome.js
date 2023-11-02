import React from 'react';

import GroupList from '../components/GroupList';
import GroupDetail from '../components/GroupDetail';
import GroupCreate from '../components/GroupCreate';

export default function GroupHome() {
  return (
    <div>
      <div className="flex">
        <GroupList />
        <div className="w-full flex items-centers justify-center">
          <GroupDetail />
          <GroupCreate />
        </div>
      </div>
    </div>
  );
}
