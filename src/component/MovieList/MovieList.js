import React, { useEffect, useState } from "react";
import "./MovieList.css";
import axios from "../axios/axios";
import YouTube from "react-youtube";
import { IMAGE_URL,API_KEY } from "../../Constants/Constants";

function MovieList(props) {
    const [movieOrginal, setmovieOrginal] = useState([]);
    const [trialor, settrialor] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setmovieOrginal(response.data.results);
        });
    }, [props.url]);
         
    const opts ={
        height: '390',
        width: '100%',
        playerVars:{
            autoplay: 1,
        }
    }
    const handleCheck = (movieId) =>{
        
        // console.log(movieId)
      axios.get(`movie/${movieId}/videos?api_key=${API_KEY}`).then((response)=>{
            // console.log(response.data)
            if(response.data.results.length !== 0){
                settrialor(response.data.results[0])
            }else{
                console.log('empty array')
            }
            
        })
    }

    return (
        <div className="MovieList">
            <h2>{props.title}</h2>
            <div className="card">
                {movieOrginal.map((obj) => (
                    <img onClick={()=>handleCheck(obj.id)}
                        className={props.isSmall ? "small-poster" : "poster"}
                        src={`${IMAGE_URL + obj.backdrop_path}`}
                        alt=""
                    />
                ))}
            </div>
           {trialor && <YouTube videoId={trialor.key} opts={opts} />} 
        </div>
    );
}

export default MovieList;
