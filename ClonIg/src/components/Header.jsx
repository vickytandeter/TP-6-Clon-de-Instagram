import React from "react";
import {
    FiCamera,
    FiInstagram,
    FiSettings,
    FiSend,
    FiPlusCircle
} from "react-icons/fi";
import SearchBar from "./SearchBar";

function Header(){

    return(
        <header>

             <h1>
                <FiInstagram/>Instagram
            </h1>

            <SearchBar/>
            <div className="headerIcons">   
                <button>
                    <FiSettings/>
                </button>
                <button>
                    <FiCamera/>
                </button>
                <button>
                    <FiSend/>
                </button>
            </div>            
            

            <div className = "newPost">
                <button><FiPlusCircle/>Nueva Publicación</button>
            </div>

        </header>
    );

}

export default Header;