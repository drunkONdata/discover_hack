import React from 'react';
import './time.css'


const TimeCard = ({ title, time, img }) => {
  return (
    <div className="ui card tcard">
      <div className="content">
        <div style={{ color: '#012B30' }}>
          <img src={img} alt='activity'/>
        </div>
        <div className='title'>
          {title}
        </div>
        <div className="time_estimate">
          {time}
        </div>
      </div>
    </div>
  )
}

export default TimeCard 