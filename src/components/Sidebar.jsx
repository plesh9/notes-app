import React from "react";
import ListItem from "./List-item";

const Sidebar = (props) => {


  return (
    <div className={`app-sidebar ${props.toggleBar ? "sidebar--isHidden" : ""}`}>

      {props.notes.length === 0 && <div className="no-note">No notes</div>}
      
      <ListItem {...props} />
    </div>
  );
};

export default Sidebar;
