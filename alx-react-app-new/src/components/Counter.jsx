import { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.display}>{count}</div>
      <div className={styles.controls}>
        <button 
          className={`${styles.button} ${styles.increment}`}
          onClick={() => setCount(c => c + 1)}
        >
          Increment
        </button>
        <button
          className={`${styles.button} ${styles.decrement}`}
          onClick={() => setCount(c => c - 1)}
        >
          Decrement
        </button>
        <button
          className={`${styles.button} ${styles.reset}`}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;