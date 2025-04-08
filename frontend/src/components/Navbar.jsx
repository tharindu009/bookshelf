import React from 'react'
import logo from '../assets/react.svg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <img className='img-fluid w-44 pointer' src={logo} alt="Logo" />
                <a className="navbar-brand" href="#">Book Shelf</a>
                <button
                    data-mdb-collapse-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Collections</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar