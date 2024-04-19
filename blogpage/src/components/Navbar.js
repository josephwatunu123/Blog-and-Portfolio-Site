import React from 'react';
import  "./NavbarStyles.css";
export default function Navbar(){
    return (
        <>
        <nav>
            <a href='index.html'>logo</a>
            <div id="NavDiv">
                <ul id="NavList">
                    <li> <a href='index.html'>Home</a> </li>
                    <li> <a href='index.html'>Category</a> </li>
                    <li> <a href='index.html'>Reach out</a> </li>
                    <li> <a href='index.html'>Support</a> </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

