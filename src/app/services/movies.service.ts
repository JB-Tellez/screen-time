import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  // TODO: store in .env
  private API_KEY = '3f3798b4fab8a9e67c465bd2347d06a6';

  constructor(private http:Http) { }

  getMovies() {
    
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&certification=PG&include_adult=false&include_video=false&page=1&year=2017`;
    
    // mock data
    // const url = './assets/movies.json';
    
    return this.http
      .get(url)
      .map( data => data.json().results);
  }

  getMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`;
    return this.http.get(url).map( data => {
      console.log('movie data', data.json());
      return data.json();
    });
  }
}
