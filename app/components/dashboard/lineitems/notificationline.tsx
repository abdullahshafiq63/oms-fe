"use client";

import SubNotifications from "./subnotifications";

const Notification = () => {
  return (
    <div className="w-full  ">
      <p className="w-full h-5 font-sans text-base font-normal leading-5 text-left">
        Notifications
      </p>
      <SubNotifications icon="/IconSet11.png" notification={'You fixed a bug.'} time={'Just now'} /> 
      <SubNotifications icon="/User.png" notification={'New User Registered'} time={'59 minutes ago'} /> 
      <SubNotifications icon="/IconSet11.png" notification={'you just fixed a bug'} time={'12 hours ago'} /> 
      <SubNotifications icon="/iconSet(10).png" notification={'Andy subscribes you'} time={'Today, 11:59 AM'} /> 
  
    </div>
  );
};

export default Notification;
