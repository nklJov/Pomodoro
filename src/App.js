import './App.css';
import { useState, useRef, useEffect } from 'react';
import ActionButtons from './components/ActionButtons';
import Slider from './components/CustomSlider'
import Timer from './components/Timer';

function App() {

  const [counter, setCounter] = useState(-1);
  const [time, setTime] = useState('25:00');
  const [isBreak, setIsBreak] = useState(false)
  const [workTimeCounter, setworkTimeCounter] = useState(0)

  const [timeSlider, setTimeSlider] = useState(25);
  const [breakTimeSlider, setBreakTimeSlider] = useState(5);

  const [coin, setCoin] = useState([]);
  const [coinsLoaded, setCoinLoaded] = useState(false);


  const timerRef = useRef(null);

  const timerf = () => {
    let myTime;
    setCounter(counter => counter + 1)

    if (counter === 0) {
      myTime = timeSlider + ':00'
    } else {
      myTime = timerRef.current.innerText

    }

    let minutes = +(myTime.split(':')[0])
    let seconds = myTime.split(':')[1]


    if ((counter % 60) == 0) {
      minutes = minutes - 1;
    }


    if (seconds == '00') {
      seconds = 60
    }


    seconds = seconds - 1;

    if (seconds < 10)
      seconds = "0" + seconds


    if (minutes == 0 && seconds == '00' && !isBreak) {
      setTime((breakTimeSlider - 1) + ":00")
      setIsBreak(!isBreak)
      setworkTimeCounter(workTimeCounter + 1);
    } else if (minutes == 0 && seconds == '00') {
      setTime(timeSlider + ':00')
      setIsBreak(!isBreak)
    } else {
      setTime(minutes + ":" + seconds)

    }
  }


  const skipCurrent = () => {
    setTime('0:01');
    setIsBreak(!isBreak);

  }


  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets/bitcoin')
    .then(function (res) {
      return res.json()
    })
    .then(res => {
      setCoin(res.data)
      setCoinLoaded(true)
      

      
    })
    .catch(error => 'Greska: '+ error)

    if (counter > -1) {
      const timer = setTimeout(() => {
        timerf()
      }, 20);
      return () => {
        clearTimeout(timer);
      }
    }
  }, [counter]);
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2 mainDiv" style={{ backgroundColor: isBreak ? 'PaleGreen' : 'tomato' }}>

          <Slider timeSlider={breakTimeSlider} setTimeSlider={setBreakTimeSlider} header="Break time" />
          <Slider timeSlider={timeSlider} setTimeSlider={setTimeSlider} header="Work time" /><hr />
          <Timer time={time} timerRef={timerRef} />
          <ActionButtons timer={() => setCounter(counter + 1)} skip={skipCurrent} /><hr />

          <div className="row mb-3">
            <div className="col-12 text-center">
              Work time counter: {workTimeCounter === 0 ? ' nothing for today :(' : workTimeCounter}
            </div>
          </div>

        </div>
      </div>

      <div className="d-flex flex-sm-column my-5 coinStat">
        
          <div class="d-flex flex-md-column coinName">{coin.name}</div>
          <div class="d-flex flex-md-column coinPrice">{(Math.round(coin.priceUsd*100)/100).toFixed(2)}</div>
          
      </div>
    </div>
  );
}

export default App;
