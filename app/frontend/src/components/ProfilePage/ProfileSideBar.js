import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react';
import { FaSms, FaUserAlt, FaNetworkWired } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './ProfileSideBar.scss';
import { Link } from 'react-router-dom';

function ProfileSideBar() {

  return(
    <ProSidebar image="https://azouaoui-med.github.io/react-pro-sidebar/static/media/bg1.74aaeeb9.jpg">
      <Menu iconShape="square">
        <MenuItem icon={<FaUserAlt />}>
          Edit Profile
          <Link to="/profile"/>
        </MenuItem>
        <MenuItem icon={<AiOutlineMail/>}>
          Change Email
          <Link to="/profile/email"/>
        </MenuItem>
        <MenuItem icon={<FaSms />}>
          Push Notifications
          <Link to="/profile/notification"/>
        </MenuItem>
        <MenuItem icon={<FaNetworkWired />}>Privacy and Security</MenuItem>
        {/* <SubMenu title="Components" icon={<FaHeart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu> */}
      </Menu>
    </ProSidebar>
  );

}

export default ProfileSideBar;