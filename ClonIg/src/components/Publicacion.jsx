import React from "react";

function publicacion({post, onSelect}) 
{
    return (
        <div class="publicacion" onClick={() => onSelect(post)}>
            
            {post.contenido !== "N/A" && (
                <img src={post.contenido} className="publicacion-img"/>
            )}

            <div class="publicacionInfo">
                <p>{post.likes}</p>
                <h3>{post.usuario}</h3>
                <p>{post.descripcion}</p>
                <p>{post.fecha}</p>
            </div>

        </div>
    );
}

export default publicacion;
