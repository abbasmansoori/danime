import React from "react";

export default function Sidebar({ topAnime }) {
  return (
    <aside>
      <h3>Top 10 Anime</h3>
      <nav>
        {topAnime.map((anime) => (
          <a
            href={anime.url}
            target="_blank"
            key={anime.mal_id}
            rel="noreferrer"
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
