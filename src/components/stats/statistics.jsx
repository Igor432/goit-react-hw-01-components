import React from 'react';
import style from '../stats/stats.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title = 'Upload Stats', stats }) => {
  const randColor = () => {
    return (
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')
        .toUpperCase()
    );
  };

  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.stats}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={style.item}
            style={{
              backgroundColor: randColor(),
            }}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.object,
  id: PropTypes.object,
  label: PropTypes.object,
  percentage: PropTypes.object,
};

export default Statistics;
