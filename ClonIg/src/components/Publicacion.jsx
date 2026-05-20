import React from "react";
import { FiSend } from "react-icons/fi";

function Publicacion({ post, onSelect }) 
{
    return (

        <div 
            className="publicacion"
            onClick={() => onSelect(post)}
        >

            <img
                src={post.contenido}
                className="publicacion-img"
            />

            <div className="publicacion-footer">
                <div className="publicacion-usuario">
                    <img
                        src="https://i.pravatar.cc/40"
                        className="foto-perfil"
                    />
                    <p>@{post.usuario}</p>
                </div>
                <div className="publicacion-acciones">
                    <button>
                        <FiHeart />
                    </button>
                    <button>
                        <FiMessageCircle />
                    </button>
                    <button>
                        <FiSend />
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Publicacion;