import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Pricecoin from './components/pricecoin'

let logo ='https://upload.wikimedia.org/wikipedia/th/d/d0/Dogecoin_Logo.png'

function App() {
  const [ticker , setTicker] = useState({
    low:0,
    high:0,
    current:0
  })
  useEffect(() => {
    const getAPI = async () => {
      const {data} = await axios.get('https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/dogeusdt')
      setTicker(data.ticker)
    }
    getAPI()
    const interval = setInterval(() => 
      getAPI(),10000
    )
    return () => {
      clearInterval(interval)
    }
  },[])
  return (
    <div className="container"> 
    <div className="card">
      <div className="row"> 
          <img src={logo} width="150" height="150" alt="doge img"/>
          <div className="detail">
              <h1>Tracker <span className="text-span">Doge</span> Coin!</h1>
              <h2>go to the moon !</h2>
          </div>
          <div className="wrapper-coin">
            <Pricecoin type="low" price={ticker.low}/>
            <Pricecoin type="high" price={ticker.high}/>
            <Pricecoin type="current" price={ticker.last}/>
          </div>
      </div>
    </div>
    </div>
)
}

export default App;
