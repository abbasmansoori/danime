import React from "react";
import AnimeCard from "./AnimeCard";
import "./main-content.scss";

export default function MainContent(props) {
  return (
    <main className="main-content">
      <div className="main-content__anime-cards">
        {props.animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} synopsis={anime.synopsis} />
          ))}
      </div>
    </main>
  );
  
}
      
