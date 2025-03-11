import {Link} from 'react-router-dom';
import './Nav.scss';

export default function Nav() {

    
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/html">HTML</Link></li>
                    <li><Link to="/css">CSS</Link></li>
                    <li><Link to="/javascript">JavaScript</Link></li>
                    <li><Link to="/react">React</Link></li>
                    <li><Link to="/headless-cms">Sanity</Link></li>
                </ul>
            </nav>
        </header>
    )
}