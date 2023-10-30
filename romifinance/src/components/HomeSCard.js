import React from 'react';
import './HomeSCard.css';

export default function HomeSCard({img,title,val}) {
  return (
    <div className='homeSCard'>
      <img src={img} alt="" />
      <div className='homeSCard-content'>
        <div className='homeSCard-title'>{title}</div>
        <div className='homeSCard-value'>{val}</div>
      </div>
    </div>
  )
}
