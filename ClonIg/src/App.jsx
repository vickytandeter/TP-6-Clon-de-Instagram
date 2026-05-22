import { useEffect, useState } from "react";
import axios from "axios";
import Feed from "./components/Feed";
import DetallePublicacion from "./components/DetallePublicacion";
import './App.css';
import BarraLateral from "./components/BarraLateral";
import Header from "./components/Header";

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
                    fotoPerfil: `https://i.pravatar.cc/40?img=${index + 1}`,
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

        <div className="layout">
            
            <Header/>

            <BarraLateral/>

            <div className="app">

                <h1 className="titulo">
                    TRENDING
                </h1>

                <Feed
                    publicaciones={publicaciones}
                    onSelect={setPostSeleccionado}
                />

                {postSeleccionado && (

                    <DetallePublicacion
                        post={postSeleccionado}
                        onVolver={() => setPostSeleccionado(null)}
                    />

                )}

            </div>

        </div>
    );
}

export default App;