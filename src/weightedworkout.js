import { Link } from 'react-router-dom';
export default function Weightedworkout(){
    return(
        <>
        <ul>
            <li>
                <Link to="/Chest">Chest</Link>
            </li>
            <li>
                <Link to="/Back">Back</Link>
            </li>
        </ul>
        </>
    );
};