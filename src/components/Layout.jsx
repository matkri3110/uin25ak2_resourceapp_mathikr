import Nav from './Nav'

export default function Layout( {children} ) {
    return (
        <div id="styles">
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

