import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Topten from "./components/section/Topten";
import MainContent from "./components/main-content/MainContent";
import Footer from "./components/footer/Footer";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const topReq = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());
    setTopAnime(topReq.top.slice(0, 10));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const searchReq = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}$order_by=title&sort=asc&limit=20`
    ).then((res) => res.json());
    setAnimeList(searchReq.results);
    console.log(searchReq);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div className="App">
      <Header setSearch={setSearch} handleSearch={handleSearch} />
      <Topten topAnime={topAnime} />
      <div className="content-wrap">
        <MainContent search={search} animeList={animeList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
