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

  constructor(private router:Router, private moviesService:MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies()
  }

  getPosterPath(movie) {
    return `https://image.tmdb.org/t/p/w92${movie.poster_path}`;
  }

  movieClicked(movie) {
    this.router.navigate(['/movie', movie.id])
  }

}
