import React from 'react'

function AnimeCard({anime}) {
    return (
        <article className="anime-card" target="_blank" rel="norefferer">
            <a href={anime.url}>
                <figure>
                    <img src={anime.image_url} alt ="Anime">
                    </img>
                </figure>
                <h3>{anime.title}</h3>
            </a>
        </article>
    )
}

export default AnimeCard
