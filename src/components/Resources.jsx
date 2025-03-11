import { Link } from "react-router-dom"
import resources from "../assets/resources.js"
import PageTitle from "./PageTitle"
import './Resources.scss'

export default function Resources( {category} ) {
    const filteredResources = resources.filter((resource) => resource.category === category ) 
        console.log(filteredResources)

    
    return (
    <>
        <PageTitle Hovedoverskrift = {filteredResources[0].category} />
        {filteredResources.map((mappedResources) => (
            <article className="ressurser" key={mappedResources.id}>
                    <h3>{mappedResources.title}</h3>
                    <ul>
                        <li>
                            <Link to={mappedResources.url}>Trykk her for å lese mer</Link>
                        </li>
                    </ul>
            </article>
        ))}
    </>
    )
}