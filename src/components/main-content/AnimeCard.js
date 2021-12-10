import React from 'react'

function AnimeCard({anime}) {
    return (
        <article className="anime-card" target="_blank" rel="norefferer">
            <a href={anime.url}>
                <figure>
                    <img className="anime-image" src={anime.image_url} alt ="Anime">
                    </img>
                </figure>
                
            <h3 className="anime-title">{anime.title}</h3>
                <h3 className="synopsis"> {anime.synopsis}</h3>
            </a>
        </article>
    )
}

export default AnimeCard
