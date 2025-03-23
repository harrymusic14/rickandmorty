import ResidentCard from './ResidentCard'

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
