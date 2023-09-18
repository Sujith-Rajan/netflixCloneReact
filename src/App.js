import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import MovieList from "./component/MovieList/MovieList";
import './App.css'
import Poster from "./component/Poster/Poster";

import  {Originals,actions,comedy,horror,romance,documentaries,topRated} from './component/Urls/Urls'


export default function App() {
  
    return (
        <div className="App">
          <Navbar/> 
               
            
            
            <Banner/>
            <MovieList url={Originals} title='Netflix Original'/ >
            <MovieList  url={actions} title='Action' isSmall/>
            <MovieList  url={comedy} title='Comedy' isSmall/>
            <MovieList  url={horror} title='Horror' isSmall/>
            <MovieList  url={romance} title='Romance' isSmall/>
            <MovieList  url={documentaries} title='Documetries' isSmall/>
            <MovieList  url={topRated} title='Top Rated' isSmall/>
            <Poster/>
        </div>
    );
}
