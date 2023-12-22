import React, { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=b7ca5f27';

const movie1 = {
    Title: 'Spiderman',
    Year: '1990',
    imdbID: 'tt0100669',
    Type: 'movie',
    Poster: 'N/A'
};

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();

            // Check if the response was successful
            if (data.Response === 'True') {
                // Update state with the search results
                setMovies(data.Search);
            } else {
                console.error('Error in API response:', data.Error);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // Initial search for Spiderman on component mount
        searchMovies('Spiderman');
    }, []); // Dependency array is empty to run only once on mount

    const handleSearchClick = () => {
        // Trigger the search when the button is clicked
        searchMovies(searchTerm);
    };

    return (
        <div className='app'>
            <h1>MovieHome</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearchClick}>Search</button>
            </div>

            {movies.length > 0 ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )}

            {/* Render the default movie1 */}
            <div className='container'>
                <MovieCard movie={movie1} />
            </div>
        </div>
    );
};

export default App;
