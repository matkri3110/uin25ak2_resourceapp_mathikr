// Navigansjonskomponentet på siden.

// Importerer Link fra react-router-dom for å kunne lage linker til andre sider.
import {Link} from 'react-router-dom';
// Importerer den tilhørende stilfilen for navigasjonsmenyen.
import './Nav.scss';

export default function Nav() {

    
    return(
        // Header seksjon som inneholder navigasjonsmenyen for siden. 
        <header>
            <nav>
                <ul>
                    {/* Lager en liste med li-tagger som alle inneholder en "Link to" komponent som sørger for at linkene navigerer til riktig sider. */}
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