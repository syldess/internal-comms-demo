import React from 'react';
import Toggler from './Toggler';
import { v4 as uuidv4 } from 'uuid';

const Chooser = (props) => {
  return (
    <div className="ui container">
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">{props.header}</div>
            <div className="meta">{props.meta}</div>
            <div className="description">{props.description}</div>
          </div>
          {props.list.map((role) =>
            role ? (
              <Toggler
                title={role}
                attribute={props.type}
                toggle={props.toggle}
                key={uuidv4()}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Chooser;
