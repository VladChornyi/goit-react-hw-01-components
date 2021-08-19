import PropTypes from 'prop-types';
import s from './Stats.module.css';
const Stats = ({stats}) => {
    return (
      <ul className={s.list}>
        {stats.map(item=>  <li key={item[0]}>
      <span className={s.text}>{item[0]}:</span>
      <span className={s.text}>{item[1]}</span>
    </li>)}
  
  </ul>
    );
}

export default Stats;


Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType(
        [PropTypes.string,
         PropTypes.number,]
      )
    )
  )
}