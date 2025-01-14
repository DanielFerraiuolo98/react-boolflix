import axios from 'axios';
import { useState, useEffect } from 'react';

function CardSeries() {
    const [data, setData] = useState([]);

    const apiUrlSeries = "https://api.themoviedb.org/3/search/tv?api_key=70f7f9ddab19c38e31331a2bc333f7ca&query=a&language=it-IT"

    useEffect(() => {
        axios.get(apiUrlSeries).then((res) => {
            setData(res.data.results);
        })
            .catch((error) => {
                console.log(error, "errore nella ricerca della serie TV");
            })
    }, []);

    return (
        <>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.name} />
                        <h3>{item.original_name}</h3>
                        <p className='language'>{item.original_language}</p>
                        <p className='voto'>{item.vote_average}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CardSeries;
