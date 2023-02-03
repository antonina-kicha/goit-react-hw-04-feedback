import PropTypes from 'prop-types';
import {ListButton} from './Feedback.styled'


export const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <ListButton>
                {options.map((option) => (
                <li key={option}><button type='button' onClick={() => onLeaveFeedback(option) }>{option}</button></li>
            ))}
                </ListButton>
        </>
        
    )
}

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}