function LocationInfo({location}) {
  const length = location.residents?.length

  return (
    <div className="location">
        <h2>{location.name}</h2>
        <ul>
            <li><span>type:</span>{location.type}</li>
            <li><span>Dimension:</span>{location.dimension}</li>
            <li>
                <span>Population:</span>{length}{length === 1 ? 'Resident' : 'Residents'}
            </li>
        </ul>
    </div>
    )
  }
export default LocationInfo