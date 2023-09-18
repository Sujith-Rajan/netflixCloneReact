import React, { useEffect,useState} from 'react'
import {API_KEY,IMAGE_URL} from '../../Constants/Constants'
import axios from '../axios/axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/movie/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
      
       setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })
   
  },[])
  return (
    <div>
    <div style={{backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 0.6) 0, rgba(7, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.6) 100%),url(${movie ? IMAGE_URL+movie.backdrop_path : ""})`}} className='banner'> 
     <div className='banner-text'>
       
      <h1>The biggest Indian hits. The best Indian stories. All </h1>
      <h1>streaming here.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div className='banner-action'>
        <input type='text' placeholder='Email address' ></input>
        <button>Get Started  </button>

      </div>
      
    </div>
    <div className='fade'>

       </div>
    </div>
  )
}

export default Banner