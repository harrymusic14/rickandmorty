import ResidentCard from './ResidentCard'
import './ResidentsList.css'

function ResidentsList({residents}) {
  return (
    <>
    {residents.length === 0 && 
      <h2 style={{textAlign: 'center'}}>No hay residentes.</h2>
    }
    <div className="residents">
      {residents.map(resident => (
        <ResidentCard key={resident} url={resident}/>
      ))}
    </div>
    </>
  )
}

export default ResidentsList
