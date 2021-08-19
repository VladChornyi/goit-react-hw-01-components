import StatisticItem from './StatisticItem/StatisticItem';
import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({ title, stats } ) => {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul  className={s.list}>
            {stats.map(({ id, label, percentage }) => (
                <StatisticItem key={id} label={label} percentage={percentage}/>
            ))}
                 </ul>
            </section>
            
    );
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}
