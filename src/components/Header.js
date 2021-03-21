import React, {Fragment, useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom'
import { Blob } from 'react-blob'

export default function Header() {
    const BackgroundBlob = ({style, props}) =>
        <Blob className="test" size="100vh"
        style={{
            position: 'absolute',
            top: '-15%',
            right: '-15%',
            zIndex: -1,
            color: 'white',
            opacity: 0.05,
            fontSize: '50vh',
            ...style
        }}
        {...props}
        />
    const [toggleMenu, setToggleMenu] = useState(false)
    const [largeur, setLargeur] = useState(window.innerWidth)   // on le démarra à la largeur à l'instant du site
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
        const changeTaille = () => {
            setLargeur(window.innerWidth)
            if (window.innerWidth >500) {
                setToggleMenu(false)
            }
        }
        window.addEventListener('resize', changeTaille)
    }, [largeur])
        
    return (
        <header>
            <Blob>
                <span className='init'>AG<span className='poin'>.</span></span>
            </Blob>
            <div>
                <button onClick={toggleNav} className="hamburger">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            {(largeur > 1030 || toggleMenu) && (
                <div className="links">
                    <NavLink to='/' exact>
                        Home
                    </NavLink>
                    <Link to='/' exact>
                        About me
                    </Link>
                    <Link to='/' exact>
                        Portfolio
                    </Link>
                    <Link to='/' exact>
                        Contact
                    </Link>
                </div>
            )}
        </header>
    )
}
