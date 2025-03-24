import { useEffect } from "react"
import useFetchApi from "../hooks/useFetchApi"
import'./ResidentCard.css'

function ResidentCard({url}) {  
  const {data: resident,request, loading} = useFetchApi()  

  useEffect(()=>{
    request(url)
  },[url])

  if (loading) return <p>Cargando...</p>
  
  const episodes = resident?.episode?.length || 1
  
  return (
    <>
    {resident && (
        <div>
            <img src={resident.image} alt={resident.name} />
            <p>{resident.status}</p>
            <h2>{resident.name}</h2>
            <ul>
              <li><span>specie</span>{resident.species}</li>
              <li><span>origin</span>{resident.origin.name}</li>
              <li><span>Eppisodes where appear</span>{episodes}{episodes == 1 ? 'episode' : 'episodes'}</li>
            </ul>
        </div>
    )}
    </>
  )
}

export default ResidentCard
