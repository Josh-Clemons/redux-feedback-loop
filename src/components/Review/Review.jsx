import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from "axios";

export default function Review() {
    const store = useSelector(store => store);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        axios.post('/feedback', {
            type: 'POST',
            data: {
                feeling: store.userFeeling,
                understanding: store.userUnderstanding,
                support: store.userSupport,
                comments: store.userComment,
            }.then((response) => {
                console.log('success POSTING', response);
                history.push('/confirmation');
                dispatch({
                    type: 'CLEAR',
                })
            }).catch(err => {
                console.log('error POSTing', err);
            })
        })
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <br />
            <section>Feelings: {store.userFeeling}</section>
            <section>Understanding: {store.userUnderstanding}</section>
            <section>Support: {store.userSupport}</section>
            <section>Comments: {store.userComment}</section>
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    )
}