import styles from './Timer.module.scss';
import Button from '../Button/Button';

const Timer = () => {
  const handleStart = (e) => {
    console.log('start');
  };
  const handleStop = (e) => {
    console.log('stop');
  };
  const handleReset = (e) => {
    console.log('reset');
  };

  return (
    <div>
      <div className={styles.timer}>00:00:00.000</div>
      <Button action={handleStart}>Start</Button>
      <Button action={handleStop}>Stop</Button>
      <Button action={handleReset}>Reset</Button>
    </div>
  );
};

export default Timer;
