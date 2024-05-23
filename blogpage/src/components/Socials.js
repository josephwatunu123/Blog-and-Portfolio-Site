import React from 'react';
import classes from "../Styles/SocialsStyle.module.css";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
    return (
        <nav className={classes.socialNav}>
            <div className={classes.SocialsDiv}>
                <ul id="SocialsListLeft" className={classes.socialsList}>
                    <li><a href='index.html' className={classes.write}>Write</a></li>
                    <li><a href='index.html' className={classes.join}>Join</a></li>
                </ul>
                <ul id='SocialsListRight' className={classes.socialsList}>
                    <li><a href='index.html'><FaInstagram /></a></li>
                    <li><a href='index.html'><FaXTwitter /></a></li>
                    <li><a href='index.html'><FaLinkedinIn /></a></li>
                    <li><a href='index.html'><FaGithub /></a></li>
                </ul>
            </div>
        </nav>
    );
}
