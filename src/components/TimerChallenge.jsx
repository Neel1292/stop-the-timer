import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  let timer = useRef();
  let dialog = useRef();

  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
  const timerIsAvtive = timerRemaining > 0 && timerRemaining < targetTime * 1000;

  if(timerRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current && dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimerRemaining(prevTimerRemaining => prevTimerRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function handleReset() {
    setTimerRemaining(targetTime * 1000);
  }

  return (
    <>
    <ResultModal ref={dialog} onReset={handleReset} targetTime={targetTime} remainingTime={timerRemaining} result='lost'/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
      <p>
        <button onClick={timerIsAvtive ? handleStop : handleStart}>
          {timerIsAvtive ? 'Stop': 'Start'} Challenge
          </button>
      </p>
      <p className={timerIsAvtive ? 'active': undefined}>
        {timerIsAvtive ? ' Time is Running....' :  'Timer Inactive'}
      </p>
    </section>
    </>
  )
}
