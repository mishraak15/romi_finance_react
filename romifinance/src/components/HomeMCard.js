import React from 'react';
import './HomeMCard.css';

export default function HomeMCard({img,title,desc}){
  return (
    <div className='homeMCard'>
      <div className='homeMCard-content'>
        <img src={img} alt="" />
        <span className='homeMCard-title'>{title}</span>
      </div>
      <div className='homeMCard-desc'>{desc}</div>
    </div>
  )
}
