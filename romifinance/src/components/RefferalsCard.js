import React from 'react';
import './RefferalsCard.css';

export default function RefferalsCard({title,desc}) {
  return (
    <div className='refferalsCard'>
      <div className='refferalsCard-title'>{title}</div>
      <div className="refferalsCard-desc">{desc}</div>
      <button className='btn refferal-btn'>Connect Wallet</button>
    </div>
  )
}
