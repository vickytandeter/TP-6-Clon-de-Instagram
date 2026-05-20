import React from "react";
import { FiSend } from "react-icons/fi";

function DetallePublicacion({ post, onVolver })
{
    return (

        <div className="detallePublicacion">

            <button onClick={onVolver}>
                ← Feed
            </button>

            <img
                src={post.contenido}
                className="detalle-img"
            />

            <div className="detalle-info">

                <h2>{post.usuario}</h2>

                <p>{post.descripcion}</p>

                <p>{post.fecha}</p>

                <div className="estadisticas">
                    <button><FiHeart/> {post.likes} likes</button>
                    <button><FiMessageCircle/> {post.comentarios} comentarios</button>
                    <button><FiSend/> {post.reenviados} reenviados</button>
                </div>
            </div>
        </div>
    );
}

export default DetallePublicacion;