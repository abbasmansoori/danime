import React from "react";
import "./anime-card.scss";

function AnimeCard({ anime }) {
  return (
    <article className="anime-list" target="_blank" rel="norefferer">
      <a href={anime.url}>
        <img
          className="anime-list__anime-image"
          src={anime.image_url}
          alt="Anime"
        ></img>
        <h3 className="anime-list__anime-title">{anime.title}</h3>
        <h3 className="anime-list__anime-synopsis"> {anime.synopsis}</h3>
      </a>
    </article>
  );
}

export default AnimeCard;
