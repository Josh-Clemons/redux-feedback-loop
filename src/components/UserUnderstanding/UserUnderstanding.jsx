import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function UserUnderstanding() {
    const [understanding, setUnderstanding] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        if (understanding === '') {
            alert('Input a number silly');
            return;
        } else {
            dispatch({
                type: 'UPDATE_UNDERSTANDING',
                payload: understanding,
            })
            history.push('/support')
        }
    }

    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <input min="1" max="5" type='number' onChange={(e) => setUnderstanding(e.target.value)} />
            <button onClick={handleClick}>Next</button>
        </div>
    )
}