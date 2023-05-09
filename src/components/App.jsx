import React, { useState, useEffect } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './Feedback/FeedbackButton';
import Statistics from './Statistics/Statistics';
import styles from './Feedback/Feedback.module.css';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const onLeaveFeedback = el => {
    setState(prev => ({ ...prev, [el]: prev[el] + 1 }));
  };

  useEffect(() => {
    const totalValue = Object.values(state).reduce((acc, el) => (acc += el), 0);
    setTotal(totalValue);
    setPercentage((state.good * 100) / totalValue);
  }, [state]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
        padding: 25,
      }}
    >
      <div className={styles.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeavefeedback={onLeaveFeedback}
          />
        </Section>

        {total === 0 ? (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        ) : (
          <Section>
            <Statistics
              state={state}
              total={total}
              positivePercentage={percentage}
            />
          </Section>
        )}
      </div>
    </div>
  );
};