import s from './StatisticItem.module.css'

const StatisticItem = ({id, label, percentage}) => {
    return (
        <li className={s.item}>
            <span className={s.label}>{label} : </span>
            <span className={s.percentage}>{percentage}%</span>
        </li>
    );
}

export default StatisticItem;