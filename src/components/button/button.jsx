import React from 'react';
import styles from './button.module.css';

const Button = ({label}) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
