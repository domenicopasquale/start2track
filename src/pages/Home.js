import React, {useState} from "react";
import {ResultCard} from "../components/ResultCard";
import axios from "axios";

export const Home = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = async (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        try {
            let data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`);
            if (data) {
                console.log('data', data)
                setResults(data.data.results);
            } else {
                setResults([]);
            }
        } catch (err) {
            return await err;
        }
    };

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="🔍 Search for a movie..." value={query} onChange={onChange}/>
                    </div>


                    {
                        results.length <= 0 && query !== '' ?
                            <h2 className="no-movies">No movies find, try again</h2>
                            :
                            <ul className="results">
                                {results.map((movie) => (
                                    <li key={movie.id}>
                                        <ResultCard movie={movie}/>
                                    </li>
                                ))}
                            </ul>
                    }

                </div>
            </div>
        </div>
    );
};
