import React, {useState, useEffect} from 'react';
import { Spinner } from 'react-bootstrap';

import Header from './components/Header'
import MarketChart from './components/MarketChart'
import { timestamps } from './config'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {

const [timeStampUrl, setTimeStampUrl] = useState(timestamps[0].url)  
const [data, setData] = useState([])  
const [loading, setLoading] = useState(false)  

useEffect(()=>{
  const url = `https://www.fxempire.com/api/v1/en/markets/aapl/chart${timeStampUrl ? '?time='+timeStampUrl : ''}`
  setLoading(true);
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data = data.sort((a, b) => a.date - b.date)
    setData(data);
    setLoading(false);
  });
}, [timeStampUrl])

  return (
    <>
      <Header setTimeStampUrl={setTimeStampUrl} />
      <main>
        {
          loading ?
          <Spinner style={{marginTop:50}} animation="border" /> :
          <MarketChart data={data} />    
        }
      </main>
    </>
  )
}