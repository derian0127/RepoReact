import { useState } from 'react';
import { Modal } from './Modal';
import styles from './Contador.module.css';

export const Contador = () => {
    const [count, setCount] = useState(false);
  return (
    <main className={styles.card}>
      <h1>Contador</h1>
      <button onClick={() => setCount(!count)}>{count ? 'Ocultar' : 'Ver'}
      </button>

      {count && <Modal/>}
    
    
    </main>
  );
}