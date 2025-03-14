// Lager Resources.jsx komponenten som skal vise ressursene som hentes ut fra resources.js fra assets mappen.

// Importerer Link fra react-router-dom for å kunne lage linker til andre sider.
import { Link } from "react-router-dom"
// Importerer resources fra assets mappen.
import resources from "../assets/resources.js"
// Importerer PageTitle komponenten.
import PageTitle from "./PageTitle"
// Importerer komponentens tilhørende stilfil Resources.scss.
import './Resources.scss'

/*
    For å kunne få til å skrive ut de riktige ressursene på siden ifølge oppgaven, så har jeg fått hjelp av medstudent Hanna Sørum. 
    Da jeg fikk tilbakemelding på arbeidskrav 1 at jeg hadde gjort det litt komplisert med tanke på filtrering og uthenting av informasjon fra js-filen,
    så har jeg valgt å følge Hanna sin løsning i denne oppgaven. Synes også at den var en del enklere enn den løsningen jeg hadde valgt i arbeidskrav 1.

    Først må vi hente ut riktig kategori fra resources.js. Dette gjør vi ved å bruke filter-metoden.
    Vi lager en konstant "filteredResources" hvor vi lagrer den filtrerte informasjonen fra resources.js. 
    Deretter så sjekker vi koden ved å sjekke output i konsollen for å se at vi får riktig kategori.
    Deretter så returnerer vi en liste med ressurser som tilhører den kategorien vi har valgt.
    Vært ressurs i listen har en lenke til mer informasjon. 
*/

export default function Resources( {category} ) {
    const filteredResources = resources.filter((resource) => resource.category === category ) 
        console.log(filteredResources)

    
    return (
    <>
        {/* Skriver ut hovedoverskriften med navnet på den tilsvarende kategorien */}
        <PageTitle Hovedoverskrift = {filteredResources[0].category} />

        {/* Mapper gjennom de filtrerte ressursene og lagrer de i mappedResources. */}
        {filteredResources.map((mappedResources) => (
            // Skriver ut ressursene på siden i form av artikler. Med en overskrift og en lenke til mer informasjon.
            <article className="ressurser" key={mappedResources.title}>
                    <h3>{mappedResources.title}</h3>
                    <ul>
                        <li>
                            {/* Lager en lenke til ressursens URL, slik at den kan trykkes på */}
                            <Link to={mappedResources.url}>Trykk her for å lese mer</Link>
                        </li>
                    </ul>
            </article>
        ))}
    </>
    )
}