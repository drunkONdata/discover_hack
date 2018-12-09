import React from 'react';

const TimeCard = ({ title, pic, time }) => {
  return (
    <div class="ui card">
      <div class="content">
        <div class='header'>{title}</div>
      </div>
      <div class="image">
        <img src={pic} />
      </div>
      <div class="description">
        {time}
      </div>
    </div>
  )
}

export default TimeCard 