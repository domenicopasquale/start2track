import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="inner-content">
                        <div className="brand">
                            <Link to="/">start2track</Link>
                        </div>
                        <ul className="nav-links">
                            <li>
                                <Link to="/">TO WATCH</Link>
                            </li>
                            <li>
                                <Link to="/watched">WATCHED</Link>
                            </li>
                            <li>
                                <Link to="/add" className="btn">SEARCH</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
