import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const SideBar = (props) => {
  return (
    <div
      className="ui left push vertical inverted sidebar visible labeled icon menu"
      style={styles.container}
    >
      {props.menu.map(({ icon, title, action }) => {
        return (
          <div
            className="ui item button"
            key={uuidv4()}
            onClick={action}
            style={styles.sidebarBtn}
          >
            <i className={`${icon} icon`}></i>
            {title}
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
  },
  sidebarBtn: {},
};

export default SideBar;
