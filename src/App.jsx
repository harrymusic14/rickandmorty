import { useEffect, useState } from "react"
import {useFetchApi} from "./hooks/useFetchApi"

const baseUrl = "https://rickandmortyapi.com/api/location"

function App() {
  const {data: location, request} = useFetchApi()
  const [locationId, setLocationId] = useState('3')

  useEffect(() => {
    request(`${baseUrl}/${locationId}`)
  }, [locationId])
  
  return (
    <div>
      {/* Hero */}
      <div className="hero"></div>

      {/* Search */}
      <div className="search"></div>
      
      {/* LocationInfo */}
      {location && (
        <div className="location">
        <h2>{location.nam}</h2>
        <ul>
          <li><span>Type:</span>{location.type}</li>
          <li><span>Dimension:</span>{location.dimension}</li>
          <li>
            <span>Population:</span>{' '}
            {location.residents?.length}{' '}
            {location.residents?.length === 1 ? 'Resident' : 'Residents'}
          </li>
        </ul>

        </div>
      )}
      
      <pre>
        {JSON.stringify(location, null, 2)}
      </pre>

      {/* ResidentsList */}
      <div className="residents"></div>
    </div>
  ) 
}

export default App
