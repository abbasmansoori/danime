import React from "react";


export default function Header(props) {
  return (
    <header>
      <h1>
        The <strong>Dank</strong> Anime Database
      </h1>
      <div className="main-head">
      <form className="search-box" onSubmit={props.handleSearch}>
        <input
          type="search"
          placeholder="Search for an anime..."
          required
          value={props.search}
          onChange={e => props.setSearch(e.target.value)}
        />
      </form>
      </div>
    </header>
  );
}
