import React from "react";
import '../styles/example.css'

export default class Example extends React.Component {
    render() {
        return (
            <div style={{paddingTop: "5rem", textAlign: "center"}}>
                <p>Bienvenido a la página principal de juegos.</p>
                <p>Para jugar, selecciona uno de los juegos disponibles en la pestaña de la barra de navegación.</p>
                <img className = 'principal' src={require("../assets/my-games-galaxy.png")} alt="main page"/>
            </div>
        );
    }
}