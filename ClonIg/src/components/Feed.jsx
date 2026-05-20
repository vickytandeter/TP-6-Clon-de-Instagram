import React from "react";
import publicacion from "./Publicacion";

function Feed({onSelect}) {

    return (

        <div class = "feed">
            {Publicaciones.map((post) => (
                <Publicacion
                key={post.id}
                post={post}
                onSelect={onSelect}
                />
            ))}
        </div>

    )
}

export default Feed;