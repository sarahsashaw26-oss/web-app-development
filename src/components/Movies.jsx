import React from "react";
import MovieCard from "./MovieCard.jsx";

export default function Movies() {

    const [movies, setMovies] = React.useState([])


    async function handleGetMovies() {

        const url = 'https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '90165b2056msh5218e1ec6e762c2p1b30b0jsn0b7be9272e36',
                'x-rapidapi-host': 'imdb236.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setMovies(result);
        } catch (error) {
            console.error(error);
        }
    }

    function handlePrepareMovies() {
        // Prepare the movies data before using it
        handleGetMovies().then((result) => {
            // Process the result if needed
            console.log(result);
        })
            .catch((error) => {
                console.log(error);
            });
    }

    React.useEffect(() => {

        handlePrepareMovies();



    }, []);


    return (
        <div>




            {movies.map((movie) => (

                <div key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            ))}

        </div>
    )

}
