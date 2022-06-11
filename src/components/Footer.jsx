import React from "react"

export default function Footer () {
    return (
        <div className="footerContainer" style={{    backgroundColor: "#222",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        right: "0",
        left: "0",
        bottom: "0",
        height: "2rem",
        width: "100%",}}>
            <div className="foot" style={{textAlign:'center', color: 'white'}}>
                My Games 2022 ©
            </div>
        </div>
    )
}