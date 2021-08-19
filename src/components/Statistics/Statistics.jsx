
import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({ title, stats } ) => {
    return (
        
        <section className={s.statistics}>
           {title && <h2 className={s.title}>{title}</h2>}
            {stats.map(({ id, label, percentage }) => (
                 <ul key={id} className={s.list}>
                 <li className={s.item}>
                    <span className={s.label}>{label} : </span>
                    <span className={s.percentage}>{percentage}%</span>
                </li>
                </ul>
        ))}
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
