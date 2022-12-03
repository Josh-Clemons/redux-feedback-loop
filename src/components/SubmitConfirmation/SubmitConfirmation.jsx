import { useHistory } from 'react-router-dom';

// Component confirms for user the submission was successful and provides option to take another survey.
export default function SubmitConfirmation() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/feeling')
    };

    return (
        <div>
            <h2>Thank You!</h2>
            <button onClick={handleClick}>Leave New Feedback</button>
        </div>
    )
}