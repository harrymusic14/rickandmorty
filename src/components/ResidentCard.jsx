import { useEffect } from "react"
import useFetchApi from "../hooks/useFetchApi"

function ResidentCard({url}) {  
  const {data: resident,request, loading} = useFetchApi()  

  useEffect(()=>{
    request(url)
  },[url])

  if (loading) return <p>Cargando...</p>
  
  return (
    <>
    {resident && (
        <div>
            <img src={resident.image} alt={resident.name} />
            <h2>{resident.name}</h2>
        </div>
    )}
    </>
  )
}

export default ResidentCard
