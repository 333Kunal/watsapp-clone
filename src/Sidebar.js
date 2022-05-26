import React from 'react';
import "./Sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-01/04/full/1609743884-7978.jpg?im=Resize,width=640" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchOutlined />
            <input placeholder="Search or start new chat" type="text" />
          </div>
      </div>
      <div className="sidebar_chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />

      </div>
    </div>
  );
  
}

export default Sidebar