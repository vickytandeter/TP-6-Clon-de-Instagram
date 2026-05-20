import React from "react";
import Publicacion from "./Publicacion";

function Feed({ publicaciones, onSelect }) {

    return (
        <div className="feed">
            <h1>TRENDING</h1>
            <div className="publicaciones">
                {publicaciones.map((post) => (
                    <Publicacion
                        key={post.id}
                        post={post}
                        onSelect={onSelect}
                    />
                ))}
            </div>
        </div>

    );
}

export default Feed;