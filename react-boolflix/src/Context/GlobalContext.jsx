import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    function getData(query, endpoint) {
        axios.get(apiUrl + "search/" + endpoint, {
            params: {
                api_key: apiKey,
                query,
            }
        }).then((res) => {
            if (endpoint === "movie") {
                setMovies(res.data.results);
            }
            else {
                setSeries(res.data.results);
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    function search(query) {
        getData(query, "movie");
        getData(query, "tv");
    }
    const data = {
        movies,
        series,
        search,
    }
    return (<GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>);
}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext }