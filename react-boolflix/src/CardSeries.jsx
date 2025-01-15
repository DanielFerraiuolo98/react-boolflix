import axios from 'axios';
import { useState, useEffect } from 'react';

function CardSeries() {
    const [data, setData] = useState([]);

    const apiUrlSeries = "https://api.themoviedb.org/3/search/tv?api_key=70f7f9ddab19c38e31331a2bc333f7ca&query=a&language=it-IT";

    const flag = {
        "en": "/en.png",
        "de": "/de.png",
        "fr": "/fr.png",
        "it": "/it.png",
    }

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating / 2);
        const halfStars = rating % 2 >= 1 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        const fullStarsArray = [];
        for (let i = 0; i < fullStars; i++) {
            fullStarsArray.push(<span key={`full-${i}`} className="star full">★</span>);
        }

        const halfStarsArray = [];
        for (let i = 0; i < halfStars; i++) {
            halfStarsArray.push(<span key={`half-${i}`} className="star half">★</span>);
        }

        const emptyStarsArray = [];
        for (let i = 0; i < emptyStars; i++) {
            emptyStarsArray.push(<span key={`empty-${i}`} className="star empty">★</span>);
        }

        return (
            <>
                {fullStarsArray}
                {halfStarsArray}
                {emptyStarsArray}
            </>
        );
    };
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
                        {item.original_language && flag[item.original_language] && (
                            <img className='flag'
                                src={flag[item.original_language]}
                                alt={`Flag of ${item.original_language}`}
                                style={{ width: '30px', height: '20px', marginLeft: '10px' }}
                            />
                        )}
                        <p className="stars">
                            {renderStars(item.vote_average)}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CardSeries;
