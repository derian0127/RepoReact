
import { Contador } from "./Contador";
import styles from './HolaMundo.module.css';

export const HolaMundo = () => {
  return (
    <main className={styles.card}>
      <h1>Hola mundo</h1>
      <p>¡Bienvenido a tu primera aplicación React!</p>
      <div>
        <Contador  />

      </div>
    </main>
  );
}