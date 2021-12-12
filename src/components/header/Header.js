import React from "react";
import "./header.scss";

export default function Header(props) {
  return (
    <header className="main-header">
      <h1 className="main-header__title">
        The <strong>Dank</strong> Anime Database
      </h1>
      <div>
        <form className="main-header__search-box" onSubmit={props.handleSearch}>
          <input
            type="search"
            placeholder="Search for an anime..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}
