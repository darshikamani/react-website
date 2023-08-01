import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const counter = useSelector(state => state.Counter.value);
    console.log(counter);

    return (
        <div>
            <div className="card">
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
            </div>
            {counter}
        </div>

    );
}

export default Header;
