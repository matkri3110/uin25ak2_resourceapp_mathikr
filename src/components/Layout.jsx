import Nav from './Nav'
import './Layout.scss'

export default function Layout( {children} ) {
    return (
        <div id="styleContainer">
            <Nav />
            <main>
                {children}
            </main>
            <footer>
                Ressursarkiv
            </footer>
        </div>
    )
}

