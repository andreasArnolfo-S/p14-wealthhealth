import React, { FC } from 'react';
import styles from './logo.module.css';

interface LogoProps {}

const Logo: FC<LogoProps> = () => (
  <div className={styles.title}>
    <p className={styles.firstFont}>HR</p>
    <p className={styles.secondeFont}>net</p>
  </div>
);

export default Logo;
