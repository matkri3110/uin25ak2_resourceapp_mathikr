import Nav from './Nav'

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

