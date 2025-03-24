import {useRef, useState} from 'react'
import './Search.css'

function Search({setLocationId}){
    const inputRef = useRef()
    const [error, setError] = useState('')

    const handleClick = () => {
        const value = inputRef.current.value.trim()        

        if (!value) {
            setError('Please enter a valid location ID')
            return
        }

        if (value < 1 || value > 126) {
            setError('Please enter a valid location ID between 1 and 126')
            return
        }

        setLocationId(inputRef.current.value)
        inputRef.current.value = ''
        setError('')
    }
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    }
    
    return ( 
        <div className="search">
            <div className='search__container'>
                <input className='search__input' type="text"  ref={inputRef} onKeyDown={handleKeyPress}/>
                <button className='search__button'onClick={handleClick}>Search</button>
            </div>
            {error && <p className='search__error'>{error}</p>}
        </div>
    )
}

export default Search