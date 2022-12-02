import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function UserSupport () {
    const [support, setSupport ] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        if (support === ''){
            alert('Input a number silly');
            return;
        } else {
            dispatch({
                type: 'UPDATE_SUPPORT',
                payload: support,
            })
            history.push('/comment')
        }
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <input  min="1" max="5" type='number' onChange={(e) => setSupport(e.target.value)}/>
            <button onClick={handleClick}>Next</button>
        </div>
    )
}