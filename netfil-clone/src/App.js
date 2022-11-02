import React from 'react';
import './App.css';
import Row from './Row';
import request from './Request';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">

      <Nav/>
      <Banner/>
     
      <Row title = "NETFLIX ORIGINALS" fetchUrl = {request.fetchNetflixoriginals}
      isLargeRow />
      <Row title = "Trending Now" fetchUrl = {request.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl = {request.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl = {request.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl = {request.fetchComedyMovies}/>
      <Row title = "Horrar Movies" fetchUrl = {request.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl = {request.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl = {request.fetchDocumentries}/>
    </div>
  );
}

export default App;
