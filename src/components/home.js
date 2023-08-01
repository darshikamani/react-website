import { increment } from '../store/counterSlice';
import { useSelector, useDispatch } from 'react-redux'

function Home() {
    const counter = useSelector(state => state.Counter.value);
    console.log('count', counter);
    const dispatch = useDispatch()
    const updateCounter = () => {
        dispatch(increment());
    }
    return (
        <>
            <p onClick={() => updateCounter()}>click{counter}</p>
        </>
    );

}

export default Home;
