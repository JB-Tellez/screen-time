import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies;

  constructor(private router: Router, private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

  getMovie(slideIndex, colIndex) {

    let movie;

    if (this.movies) {

      let index = slideIndex * 4 + colIndex;

      movie = this.movies[index];
    }

    return movie;

  }

  getMovieTitle(slideIndex, colIndex) {

    let movie = this.getMovie(slideIndex, colIndex);

    return movie ? movie.title : '';
  }

  getPosterPath(slideIndex, colIndex) {

    let path = '';

    if (this.movies) {

      let index = slideIndex * 4 + colIndex;

      let movie = this.movies[index];

      path = `https://image.tmdb.org/t/p/w780${movie.poster_path}`;
    }

    return path;

  }

  movieClicked(slideIndex, colIndex) {
    
    let movie = this.getMovie(slideIndex, colIndex);

    this.router.navigate(['/movie', movie.id])
  }

}
