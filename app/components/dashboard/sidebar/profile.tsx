"use client";

import React from 'react';
import { Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  RightSquareOutlined,
  ArrowUpOutlined,
  DollarOutlined,
} from '@ant-design/icons';

const SideBar = () => {
  return (
    <Menu theme="light" className="min-h-screen" mode="inline" defaultSelectedKeys={['1']} style={{ background: '#fff', width: '100%', }} >
      <div className="w-[175px] h-[172px] pb-[12px] gap-[4px] ml-4">
        <Menu.Item className="font-sans text-[15px] font-normal leading-[20px] text-left" key="1" icon={<img src="/pp.png" width={24} height={24} />}>
          Iqtadar Hassan
        </Menu.Item>
        <div className="flex  items-center">

          <Menu.Item key="tab1"  className="text-[14px] opacity-50 w-7 h-7 rounded-md item-center" >
            Products
          </Menu.Item>
        
          <Menu.Item key="tab2"  className="text-[14px] text-left opacity-50 w-7 h-7 rounded-md item-center" >
            Favourite
          </Menu.Item> 
        </div>
          <Menu.Item key="3" className="text-[14px]" icon={<img src="/Dot11.png" alt="abc" width='7' height="7" />}>
            Overview
          </Menu.Item>
          <Menu.Item key="3" className="text-[14px]" icon={<img src="/Dot11.png" alt="abc" width='7' height="7" />} >
            Projects
          </Menu.Item>
      

      
    <div className="w-40 h-5  font-inter text-base font-normal leading-5 text-left opacity-50 pt-2">
        Dashboard
      </div>
      <Menu.SubMenu className="pt-3"key="sub1" icon={<img src="/pokemon.png" alt="abc" />} title="Overview">
        <Menu.Item key="2" icon={<img src="/pokemon.png" alt="abc" />}>Ecommerce</Menu.Item>
        <Menu.Item key="3" icon={<img src="/IconSet (16).png" alt="abc" />}>Projects</Menu.Item>
        <Menu.Item key="4" icon={<img src="/book.png" alt="abc" />}>Online courses</Menu.Item>
        
      </Menu.SubMenu>
     
      <Menu.SubMenu key="sub2" icon={<img src="/folder.png" alt="abc" />} title="Sales">
        <Menu.Item key="5" icon={<MenuUnfoldOutlined />}>Annual</Menu.Item>
        <Menu.Item key="6" icon={<ArrowUpOutlined />} >Quarter</Menu.Item>
        <Menu.SubMenu key="sub3" icon={<RightSquareOutlined />} title="Last Year Sales">
          <Menu.Item key="7" icon={<DollarOutlined />}>Income</Menu.Item>
          <Menu.Item key="8" icon={<ArrowUpOutlined />} >Quarter</Menu.Item> 
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub4" icon={<img src="/book.png" alt="abc" />} title="Product Analytics">
        <Menu.Item key="9" icon={<img src="/Vector2.png" alt="abc" />} >Products</Menu.Item>
        <Menu.Item key="10" icon={<img src="/Vector1.png" alt="abc" />} >Sold</Menu.Item>
        <Menu.Item key="11" icon={<img src="/book.png" alt="abc" />} >Return</Menu.Item>
        <Menu.Item key="12" icon={<img src="/ArrowRise.png" alt="abc" />}>Incoming</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="13" icon={<img src="/multiuser.png" alt="abc" />} >
       Promotions
      </Menu.Item>
      <Menu.Item key="14" icon={<img src="/User.png" alt="abc" />} >
        Information
      </Menu.Item>
      </div>
    </Menu> 
    
  );
};

export default SideBar;
