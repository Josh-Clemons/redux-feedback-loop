import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function UserComment () {
    const [comment, setComment ] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
            dispatch({
                type: 'UPDATE_COMMENT',
                payload: comment,
            })
            history.push('/review')
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <input type='text' onChange={(e) => setComment(e.target.value)}/>
            <button onClick={handleClick}>Next</button>
        </div>
    )
}