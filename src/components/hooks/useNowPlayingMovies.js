import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        API_OPTIONS
      )
      .then((res) => {
        console.log(res.data);
        dispatch(addNowPlayingMovies(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
