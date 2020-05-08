import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { Alert } from 'react-bootstrap';

import './MarketCharts.css'

function CustomizedAxisTick({x, y, stroke, payload}){
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={20} fill="#666">
        <tspan textAnchor="middle" x="0">{new Date(payload.value).toLocaleDateString()}</tspan>
        <tspan textAnchor="middle" x="0" dy="20">{new Date(payload.value).toLocaleTimeString()}</tspan>
      </text>
    </g>
  );
}

export default function MarketChart({data}){
  return (
      data.length > 0 ?
      <div className='main-chart'>
        <ResponsiveContainer height='100%'>
          <LineChart 
            data={data}
            margin={{top: 5, right: 0, left: 0, bottom: 5}}
          >
          <XAxis 
            height={100} 
            dx={0} 
            dy={10} 
            minTickGap = {30}
            dataKey="date" 
            tickCount={5}
            interval='preserveStart'
            tick={<CustomizedAxisTick/>}
          />
          <YAxis 
            domain={['dataMin', 'dataMax']} 
            width={74}
          />
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip 
            labelFormatter={label => <span>{new Date(label).toLocaleDateString()}<br/>{new Date(label).toLocaleTimeString()}</span>}
          />
          <Legend verticalAlign='top' height={40}/>
          <Line type="monotone" dataKey="open" stroke="#557dff" dot={false} />
          <Line type="monotone" dataKey="high" stroke="#ff7495"  dot={false} />
          <Line type="monotone" dataKey="low" stroke="#77dd77"  dot={false} />
          <Line type="monotone" dataKey="close" stroke="#f9e41a" dot={false}  />
        </LineChart> 
      </ResponsiveContainer> 
    </div> :
    <div>
      <Alert variant='info'>
        No data..
      </Alert>
    </div>
  )
}