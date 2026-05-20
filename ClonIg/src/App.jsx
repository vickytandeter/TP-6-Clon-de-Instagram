import { useEffect, useState } from "react";
import axios from "axios";
import Feed from "./components/Feed";
import DetallePublicacion from "./components/DetallePublicacion";
import './App.css';

function App() 
{
    const [publicaciones, setPublicaciones] = useState([]);
    const [postSeleccionado, setPostSeleccionado] = useState(null);

    useEffect(() => {

        axios
            .get("https://api.thecatapi.com/v1/images/search?limit=15")
            .then((response) => {

                const publicacionesFormateadas = response.data.map((gato, index) => ({
                    id: gato.id,
                    contenido: gato.url,
                    usuario: `cat_user_${index + 1}`,
                    descripcion: "Un gatito muy lindo 🐱",
                    fecha: "Hace unas horas",
                    likes: Math.floor(Math.random() * 500),
                    comentarios: Math.floor(Math.random() * 100),
                    reenviados: Math.floor(Math.random() * 50)
                }));

                setPublicaciones(publicacionesFormateadas);
            });

    }, []);

    return (
        <div>

            {postSeleccionado ? (

                <DetallePublicacion
                    post={postSeleccionado}
                    onVolver={() => setPostSeleccionado(null)}
                />

            ) : (

                <Feed
                    publicaciones={publicaciones}
                    onSelect={setPostSeleccionado}
                />

            )}

        </div>
    );
}

export default App;