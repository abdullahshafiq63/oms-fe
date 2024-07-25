"use client";

import React from 'react';
import { Menu } from 'antd';

const MainMenu = () => {
  return (
    <Menu
      className="flex justify-center"
      mode="horizontal"
      theme="light"
      items={[
        { key: '1', label: 'Home' },
        { key: '2', label: 'Dashboard' },
        { key: '3', label: 'Settings' },
      ]}
    />
  );
};

export default MainMenu;