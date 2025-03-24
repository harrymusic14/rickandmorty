import ResidentCard from './ResidentCard'
import './ResidentsList.css'

function ResidentsList({residents}) {
    console.log(residents)
  return (
    <div className="residents">
        <ul>
            {residents.map(resident => (
                <ResidentCard key={resident} url={resident}/>
            ))}
        </ul>
    </div>
  )
}

export default ResidentsList
