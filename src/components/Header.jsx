import React from "react";
import '../styles/header.css'
import WorldButton from './WorldButton';

export default function Header () {
    return (
        <div class="container">
            <img className="mario_img" src={require('../assets/icon.png')} />
            <h1 className="title"> My games</h1>
            <WorldButton/>
        </div>
    )
}