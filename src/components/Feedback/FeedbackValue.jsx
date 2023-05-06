import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
    <div className={styles.wrapperValue}>
      <h2 className={styles.description}>Statistics</h2>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
        <li className={styles.item}>Total: {total}</li>
        <li className={styles.item}>Positive feedback: { isNaN(positivePercentage)? 0: `${Math.round(positivePercentage)}%` }</li>
      </ul>
    </div>
  );
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}