import React from "react";
import '../styles/header.css'
import WorldButton from './WorldButton';

export default function Header () {
    return (
        <div class="container">
            <img className="logo_img" src={require('../assets/icon.png')} alt="logo"/>
            <h1 className="title"> My games</h1>
            <WorldButton/>
        </div>
    )
}