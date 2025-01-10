import React from "react";
import "./sidebar.css";
import {assets} from '../../assets/assets'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img className='menu' src={assets.menu_icon} alt="" />
        <div className="newchat"><img src={assets.plus_icon} alt="" /> 
        <p>New Chat</p>
        </div>
        <div className="recent">
            <p className="recenttitle">Recent</p>
            <div className="recententry">
                <img src={assets.message_icon} alt="" />
                <p>What is react...</p>
            </div>
        </div>
        </div>
      
      <div className="bottom">
<div className="bottomitem recententry">
    <img src={assets.question_icon} alt="" />
    <p>Help</p>
</div>

<div className="bottomitem recententry">
    <img src={assets.history_icon} alt="" />
    <p>Activity</p>
</div>

<div className="bottomitem recententry">
    <img src={assets.setting_icon} alt="" />
    <p>Setting</p>
</div>

      </div>
    </div>
  );
};

export default Sidebar;
