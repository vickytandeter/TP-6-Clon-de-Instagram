import React from "react";
import {
    FiInstagram
} from "react-icons/fi";
import SearchBar from "./SearchBar";

function Header(){

    return(
        <header>

             <h1>
                <FiInstagram/>Instagram
            </h1>

            <SearchBar/>


        </header>
    );

}

export default Header;