import { useHistory } from 'react-router-dom';

export default function SubmitConfirmation () {
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