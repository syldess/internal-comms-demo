import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ChartsContainer = ({ charts }) => {
  return (
    <div className="ui container">
      <div className="ui two column centered doubling grid">
        {charts.map((chartObj) => (
          <div style={{ textAlign: 'center', marginTop: '25px' }} key={uuidv4()}>
            <h3>{chartObj.title}</h3>
            {chartObj.chart}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartsContainer;
