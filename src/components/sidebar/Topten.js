import React from "react";
import "./top-ten.scss";

export default function Topten({ topAnime }) {
  return (
    <section className="section-topten">
      <h3 className="section-topten__title">Top 10 Anime</h3>
      <nav className="section-topten__nav ">
        {topAnime.map((anime) => (
          <a
            className="section-topten__link"
            href={anime.url}
            target="_blank"
            key={anime.mal_id}
            rel="noreferrer"
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </section>
  );
}
