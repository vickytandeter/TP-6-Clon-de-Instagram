import { useEffect, useState } from "react";
import Feed from "./components/Feed";
import { searchPost, getPostDetail } from "./services/api";
import './App.css'

export default function App() 
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
                    fecha: "Hace unas horas"
                }));

                setPublicaciones(publicacionesFormateadas);
            });

    }, []);

    return (
        <div>

            <Feed
                publicaciones={publicaciones}
                onSelect={setPostSeleccionado}
            />

        </div>
    );
}