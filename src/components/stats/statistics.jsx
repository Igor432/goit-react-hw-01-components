import style from './stats.module.css';
import PropTypes from 'prop-types';

const randColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

const Statistics = ({ title = 'Upload Stats', stats }) => {



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

  title: PropTypes.string,

  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }))








};

export default Statistics;

