import { useHistory } from 'react-router-dom';

// landing page for when user first arrives
export default function Welcome () {

    const history = useHistory();

    const handleClick = () => {history.push('/feeling')}

    return (
        <div className="welcomeDiv" onClick={handleClick}>Click here to leave feedback!</div>
    )
}