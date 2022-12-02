import { useHistory } from 'react-router-dom';

export default function Welcome () {

    const history = useHistory();

    const handleClick = () => {history.push('/feeling')}

    return (
        <div onClick={handleClick}>Click here to leave feedback!</div>
    )
}