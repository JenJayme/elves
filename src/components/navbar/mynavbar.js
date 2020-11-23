import React from 'react';
import Foundation from 'react-foundation';
import { Grid } from 'react-foundation';


function myNavbar() {
    return (
        <div className="topbar">
            <ul className="topbar menu">
                <li className="menuItem"><a>Services</a></li>
                <li className="menuItem"><a>Schedule an Elf</a></li>
                <li className="menuItem"><a>About Us</a></li>
            </ul>
        </div>
    )
}

export default myNavbar;