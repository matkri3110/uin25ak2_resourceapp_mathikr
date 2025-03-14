// Lager layout komponenten som inneholder navigasjonsmenyen og footer.

// Importerer navigasjonskoponenten "Nav".
import Nav from './Nav'
// Importerer stilfil for Layout komponenten.
import './Layout.scss'

export default function Layout( {children} ) {
    return (
        // Lager en div med id "styleContainer" slik at vi enklere kan style med sass senere.
        <div id="styleContainer"> 
            {/* Legger til navigasjonsmenyen */}
            <Nav />
            {/* Her skal hovedinnholdet på siden vises, dette gjøres dynamisk ved å bruke children-prop */}
            <main>
                {children}
            </main>
            {/* Legger til en footer */}
            <footer>
                Ressursarkiv
            </footer>
        </div>
    )
}

