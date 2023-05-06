import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={styles.title}>
      {title && <h2 className={styles.description}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};