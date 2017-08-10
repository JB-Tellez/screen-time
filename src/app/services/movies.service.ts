import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  // TODO: store in .env
  private API_KEY = '3f3798b4fab8a9e67c465bd2347d06a6';

  constructor(private http:Http) { }

  getMovies() {
    


    const url = `https://api.themoviedb.org/3/movie/283995/similar?api_key=${this.API_KEY}&language=en-US&page=1`;
    
    // mock data
    // const url = './assets/movies.json';
    
    return this.http
      .get(url)
      .map( data => data.json().results);
  }

  getMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`;
    return this.http.get(url).map( data => data.json());
  }
}
