import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { movieActions } from "../redux/actions";
import {imageExists} from "../utils/index"
import {Navibar, SideBar} from '../components'

function HomePage() {
   const {movies} = useSelector((s) => s.movie);
   console.log({movies})
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getAll());
  }, [dispatch]);

  return(
    
    <div>
      <Navibar/>
      <SideBar/>
      {movies?.map((m,idx) => {
        if(idx === 0) {console.log({m})}
        let imgUrl = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362';
        if (imageExists("http://image.tmdb.org/t/p/w500" + m.poster_path))
        {
        imgUrl = "http://image.tmdb.org/t/p/w500" + m.poster_path
      }
        return(
          <div>
          <h1>{m.title}</h1>
          <img src ={imgUrl} height={100} width={100} />
             </div>
         
        )  
      })}
    </div>

    
  );
}

export { HomePage };
