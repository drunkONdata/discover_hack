import React from 'react';

const TimeCard = ({ title, pic, time }) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className='header'>{title}</div>
      </div>
      <div className="image">
        <img src={pic} />
      </div>
      <div className="description">
        {time}
      </div>
    </div>
  )
}

export default TimeCard 