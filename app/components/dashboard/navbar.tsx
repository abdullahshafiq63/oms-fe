import React from "react";
import { Button } from "antd";

const NavBar = () => {
  return (
    <div className=" flex justify-between border-b border-[#1C1C1C]-[0.5] p-0">
      <div className="flex justify-between ">
        <Button
          type="text"
          icon={
            <img
              src="/Vector1.png"
              alt="abc"
              className="w-[16.25px] h-[13.75px] top-[3.13px] left-[1.88px]"
            />
          }
          className="w-16 h-16 text-base"
        />
        <Button
          type="text"
          icon={<img src="/Vector2.png" alt="abc" />}
          className="w-16 h-16 text-base"
        />
        <p>
          <span className="text-slate-500/50">Dashboards</span> / Default
        </p>
      </div>
      <div className="flex w-80 flex justify-between items-center bg-black-100-5">
        <div className="w-40 flex items-center bg-slate-500/5 p-2 rounded h-5">
          <img src="/search-icon.png" alt="abc" className="w-3.5" />
          <div className="text-black text-opacity-20 text-left ml-1 flex-1">Search</div>
          <img src="/text.png" alt="abc" className="w-3.5 ml-auto" />
        </div>
        <div className="flex w-32 h-16 items-center gap-4 ">
          <img
            src="/IconSet (13).png"
            alt="Icon"
            className="w-3.5 h-[13.02px] bg-black-100"
          />
          <img
            src="/IconSet (14).png"
            alt="Icon"
            className="w-3.5 h-[13.02px] bg-black-100"
          />
          <img
            src="IconSet (15).png"
            alt="Icon"
            className="w-3.5 h-[13.02px] bg-black-100"
          />
          <img
            src="/IconSet (16).png"
            alt="Icon"
            className="w-3.5 h-[13.02px] bg-black-100"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
