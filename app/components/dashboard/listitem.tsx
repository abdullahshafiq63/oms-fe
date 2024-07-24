import React from 'react';
import { Menu } from 'antd';

const MainMenu = () => {
  return (
    <Menu
      mode="horizontal"
      theme="light"
      style={{ display: 'flex', justifyContent: 'center' }}
      items={[
        { key: '1', label: 'Home' },
        { key: '2', label: 'Dashboard' },
        { key: '3', label: 'Settings' },
      ]}
    />
  );
};

export default MainMenu;