import React from 'react';

const MovieCard = ({ movie }) => {
    const { Year, Poster, Type, Title } = movie;

    // Check if the Poster is 'N/A' or an empty string and provide a placeholder image
    const posterUrl = Poster !== 'N/A' && Poster !== '' ? Poster : 'https://via.placeholder.com/400';

    return (
        <div className='movie'>
            <div>
                <p>{Year}</p>
            </div>

            <div>
                {/* Use the posterUrl as the source for the image */}
                <img src={posterUrl} alt={Title} />
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;

