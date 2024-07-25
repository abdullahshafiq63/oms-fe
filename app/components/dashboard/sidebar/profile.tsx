"use client";

import React from "react";
import { Menu } from "antd";
import {
  MenuUnfoldOutlined,
  RightSquareOutlined,
  ArrowUpOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const SideBar = () => {
  return (
    <Menu
      theme="light"
      className="min-h-screen bg-white"
      mode="inline"
      defaultSelectedKeys={["1"]}
    >
      <div className="w-44 h-43 pb-3 gap-1 ml-4">
        <Menu.Item
          className="font-sans text-4 font-normal leading-5 text-left"
          key="1"
          icon={<img src="/pp.png" width={24} height={24} />}
        >
          Iqtadar Hassan
        </Menu.Item>
        <div className="flex  items-center">
          <Menu.Item
            key="tab1"
            className="text-3.5 opacity-50 w-7 h-7 rounded-md item-center"
          >
            Products
          </Menu.Item>
          <Menu.Item
            key="tab2"
            className="text-3.5 text-left opacity-50 w-7 h-7 rounded-md item-center"
          >
            Favourite
          </Menu.Item>
        </div>
        <Menu.Item
          key="3"
          className="text-3.5"
          icon={<img src="/Dot11.png" alt="Dot11" width="7" height="7" />}
        >
          Overview
        </Menu.Item>
        <Menu.Item
          key="3"
          className="text-3.5"
          icon={<img src="/Dot11.png" alt="Dot11" width="7" height="7" />}
        >
          Projects
        </Menu.Item>

        <div className="w-40 h-5  font-inter text-base font-normal leading-5 text-left opacity-50 pt-2">
          Dashboard
        </div>
        <Menu.SubMenu
          className="pt-3"
          key="sub1"
          icon={<img src="/pokemon.png" alt="pokemon" />}
          title="Overview"
        >
          <Menu.Item key="2" icon={<img src="/pokemon.png" alt="pokemon" />}>
            Ecommerce
          </Menu.Item>
          <Menu.Item key="3" icon={<img src="/IconSet (16).png" alt="IconSet (16" />}>
            Projects
          </Menu.Item>
          <Menu.Item key="4" icon={<img src="/book.png" alt="book" />}>
            Online courses
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu
          key="sub2"
          icon={<img src="/folder.png" alt="folder" />}
          title="Sales"
        >
          <Menu.Item key="5" icon={<MenuUnfoldOutlined />}>
            Annual
          </Menu.Item>
          <Menu.Item key="6" icon={<ArrowUpOutlined />}>
            Quarter
          </Menu.Item>
          <Menu.SubMenu
            key="sub3"
            icon={<RightSquareOutlined />}
            title="Last Year Sales"
          >
            <Menu.Item key="7" icon={<DollarOutlined />}>
              Income
            </Menu.Item>
            <Menu.Item key="8" icon={<ArrowUpOutlined />}>
              Quarter
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub4"
          icon={<img src="/book.png" alt="book" />}
          title="Product Analytics"
        >
          <Menu.Item key="9" icon={<img src="/Vector2.png" alt="Vector2" />}>
            Products
          </Menu.Item>
          <Menu.Item key="10" icon={<img src="/Vector1.png" alt="Vector1" />}>
            Sold
          </Menu.Item>
          <Menu.Item key="11" icon={<img src="/book.png" alt="book" />}>
            Return
          </Menu.Item>
          <Menu.Item key="12" icon={<img src="/ArrowRise.png" alt="ArrowRise" />}>
            Incoming
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="13" icon={<img src="/multiuser.png" alt="multiuser" />}>
          Promotions
        </Menu.Item>
        <Menu.Item key="14" icon={<img src="/User.png" alt="User" />}>
          Information
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default SideBar;
