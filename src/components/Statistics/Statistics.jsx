import PropTypes from 'prop-types';

import {ListStatistic, StatisticItem} from './Statistics.styled'

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
            <ListStatistic>
                <StatisticItem>Good: {good}</StatisticItem>
                <StatisticItem>Neutral: {neutral}</StatisticItem>
                <StatisticItem>Bad: {bad}</StatisticItem>
                <StatisticItem>Total: {total}</StatisticItem>
                <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
            </ListStatistic>
        </>
            
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    topositivePercentagetal: PropTypes.number,
}