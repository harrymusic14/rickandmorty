import { useEffect, useState } from "react"
import {useFetchApi} from "./hooks/useFetchApi"
import ResidentsList from './components/ResidentsList'

const baseUrl = "https://rickandmortyapi.com/api/location"

function App() {
  const {data: location, request, loading } = useFetchApi()
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
      {loading ? <p>Cargando...</p> : location && (
        location && <LocationInfo location={location} />      
      )}

      {/* ResidentsList */}
      {location && <ResidentsList residents={location.residents} />}
    </div>
  ) 
}

export default App
