// Lager komponenten PageTitle som tar inn en prop "Hovedoverskrift" og returnerer en h1 tag med denne propen som innhold.
export default function PageTitle({Hovedoverskrift}) {
    return (
        // Skriver ut sidens hovedoversikt.
        <h1 id="Hovedoverskrift">{Hovedoverskrift}</h1>
    )
}

