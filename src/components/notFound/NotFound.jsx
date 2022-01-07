import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import './style.css'

const NotFound = () => {

    const navigate = useNavigate()
    const isDarkMode = useSelector(state => state.theme.theme_data)

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className={`not-found ${isDarkMode && 'darkModeLayautBg'}`} >
            <h1 className={isDarkMode ? 'darkModeColor' : ''}>Page not found</h1>
            <button onClick={handleClick}>Back home</button>
        </div>
    )
}

export default NotFound
