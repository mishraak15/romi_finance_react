import React from 'react'
import './DashCircleProgressBar.css';
import { Circle } from 'rc-progress';

export default function DashCircleProgressBar({value,title,hiddendata}) {
  return (
    <div className='progrssbar'>
      <Circle
      percent={value}
      strokeColor="#0598fa"
      strokeWidth={5}
      trailColor='#5c0af5'
      trailWidth={5}
      strokeLinecap='square'
      gapDegree={8}
      gapPosition={'top'}
      className='circular-bar'
      >
      </Circle>
       {/* <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        </PieChart>
      </ResponsiveContainer> */}
      <div className='progrssbar-title'>{title}</div>
      <div className="circular-bar-hidden-data">{value}% {hiddendata}</div>
    </div>
  )
}
