import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function UserFeeling () {
    const [feeling, setFeeling ] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        if (feeling === ''){
            alert('Input a number silly');
            return;
        } else {
            dispatch({
                type: 'UPDATE_FEELING',
                payload: feeling,
            })
            history.push('/understanding')
        }
    }


    return (
        <div>
            <h2>How are you feeling today?</h2>
            <input min="1" max="5" type='number' onChange={(e) => setFeeling(e.target.value)}/>
            <button onClick={handleClick}>Next</button>
        </div>
    )
}