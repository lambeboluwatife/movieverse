import { log } from "console";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

async function fetchMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  );

  new Promise((resolve) => setTimeout(resolve, 2000));

  const movies = await response.json();
  return movies.results;
}

async function fetchShows() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`
  );

  new Promise((resolve) => setTimeout(resolve, 2000));

  const shows = await response.json();

  return shows.results;
}

const Home = async () => {
  const movies = await fetchMovies();
  const shows = await fetchShows();
  return <div></div>;
};

export default Home;
