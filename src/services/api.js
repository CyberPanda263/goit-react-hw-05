import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const apiToken ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODgzZThmZjI5NGYyZTYzYWZlMGU1Njk1YjI0MjFiMiIsIm5iZiI6MTcyMjI1NzgyMS40MDQ3NCwic3ViIjoiNjZhNzhmYzUwYjE3MjNmM2E2MTFmZWVhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.jB8GynA8Bbx37CD7r0Xhj6Sz99qTRBpY-AGvYJ-hOY8";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
  return response.data.results;
};

export const fetchSearchMovies = async (searchValue) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      params: {
        query: searchValue,
      },
    }
  );
  return response.data.results;
};

export const fetchMoviesById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US `,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  return response.data;
};

export const fetchCastById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  return response.data.cast;
};

export const fetchReviewsById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  return response.data;
};
