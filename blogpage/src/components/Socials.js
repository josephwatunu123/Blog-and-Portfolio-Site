import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {  } from '@fortawesome/free-regular-svg-icons'
import { linkedIn, instagram, twitter } from '@fortawesome/free-solid-svg-icons'
export default function Socials(){
    return (
        <>
        <nav>
            <div id="SocialsDiv">
                <ul id="SocialsListLeft">
                    <li> <a href='index.html'>Write</a> </li>
                    <li> <a href='index.html'>Join</a> </li>
                    </ul>
                <ul id='SocialsListRight'> 
                    <li> <a href='index.html'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a> </li>
                    <li> <a href='index.html'><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></a> </li>
                    <li> <a href='index.html'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a> </li>
                    <li> <a href='index.html'><FontAwesomeIcon icon="fa-brands fa-github" /></a> </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

