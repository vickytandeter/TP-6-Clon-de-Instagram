import Publicacion from "./Publicacion";
import Publicaciones from "../data/Publicaciones";

export default function Feed({onSelect}) {

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