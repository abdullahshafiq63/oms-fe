"use client";

import React from "react";
import { Layout, theme } from "antd";

import Profile from "../components/dashboard/sidebar/profile";
import Activities from "../components/dashboard/lineitems/activitiesline";
import Contacts from "../components/dashboard/lineitems/contactline";
import Notification from "../components/dashboard/lineitems/notificationline";
import NavBar from "../components/dashboard//navbar";
import CardList from "../components/dashboard/cardlist";
import UserStats from "../components/dashboard/userstats";
import TrafficByWebsite from "../components/dashboard/trafficbywebsite";
import TrafficByDevice from "../components/dashboard/trafficbydevice";
import TrafficByLocation from "../components/dashboard/trafficbylocation";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const devices = [
    {
      name: 'Linux',
      bars: ['/pbar3.png', '/pbar2.png', '/pbar2.png', '/pbar1.png']
    },
    {
      name: 'Mac',
      bars: ['/gbar3.png', '/gbar2.png', '/gbar2.png', '/gbar2.png', '/gbar2.png', '/gbar1.png']
    },
    {
      name: 'iOS',
      bars: ['/bbar3.png', '/bbar2.png', '/bbar1.png']
    },
    {
      name: 'Windows',
      bars: ['/grbar3.png', '/grbar2.png', '/grbar2.png', '/grbar2.png', '/grbar2.png', '/grbar2.png', '/grbar1.png']
    },
    {
      name: 'Android',
      bars: ['/gebar3.png', '/gebar2.png', '/gebar2.png', '/gebar2.png', '/gebar2.png', '/gebar1.png']
    },
    {
      name: 'Solaris',
      bars: ['/bbar3.png', '/bbar2.png', '/bbar2.png', '/bbar1.png']
    },
    {
      name: 'Other',
      bars: ['/pbar3.png', '/pbar2.png', '/pbar1.png']
    }
  ];

  return (
    <Layout className="h-screen">
      <Sider>
        <div className="demo-logo-vertical p-0 bg-white w-full border-b border-gray-200"/>
        <Profile />
      </Sider>
      <Layout>
        <Header className="border-b border-black-10 bg-white w-full">
          <NavBar />
        </Header>
        <Content className="p-6 h-72 bg-customBgContainer bg-white rounded-customRadius">
          <div className="flex items-start relative">
            <div className="p-1 font-inter text-xs font-semibold leading-5 text-left">
              Overview
            </div>
            <div className="pt-1 ml-auto">
              Today
            </div>
          </div>
          <div className="flex gap-11 mt-0">
            <CardList />
          </div>
          <div className="flex flex-col gap-7 mt-7">
            <div className="flex h-80 gap-7">
               <UserStats />
               <TrafficByWebsite />
            </div>
            <div className="flex h-64 gap-7">
              <TrafficByDevice devices={devices} />
              <TrafficByLocation />
            </div>
          </div>
        </Content>
      </Layout>
      <Sider className="bg-white overflow-hidden">
        <div className="demo-logo-vertical" />
        <div className="w-54 min-h-screen pl-4 pt-4 border-l border-black-10 bg-white">
          <Notification />
          <Activities />
          <Contacts />
        </div>
      </Sider>
    </Layout>
  );
};

export default App;
