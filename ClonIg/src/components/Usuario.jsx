import React from "react";
import {
    FiHeart,
    FiUser,
    FiCheckCircle,
    FiInstagram
} from "react-icons/fi";
import fotoPerfil from "../assets/img/fotoPerfil.png";

function Usuario(){

    return(

        <div className="usuario">

            <h1>
                <FiInstagram/>Instagram
            </h1>

            <img src={fotoPerfil}/>

            <div className="usuario">
                <div className="nombreUsuario">
                    <h2>usuario</h2>
                    <FiCheckCircle className="verificado"/>
                </div>
                <p>@usuario</p>
            </div>

            <div className="usuarioNumeros">
                <div>
                    <FiUser/>
                    <span>121K</span>
                </div>
                <div>
                    <FiHeart/>
                    <span>900K</span>
                </div>
            </div>
        </div>

    );

}

export default Usuario;