import React, {useState, useEffect} from 'react';

import Header from './components/Header'
import MarketChart from './components/MarketChart'
import { timestamps } from './config'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {

const [timeStampUrl, setTimeStampUrl] = useState(timestamps[0].url)  
const [data, setData] = useState([])  

useEffect(()=>{
  const url = `https://www.fxempire.com/api/v1/en/markets/aapl/chart${timeStampUrl ? '?time='+timeStampUrl : ''}`
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    setData(data);
  });
}, [timeStampUrl])

  return (
    <>
      <Header setTimeStampUrl={setTimeStampUrl} />
      <main>
        <MarketChart data={data} />
      </main>
    </>
  )
}