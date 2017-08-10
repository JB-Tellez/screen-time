import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input() movie;
  @Output() onStartMovie: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
    console.log('movie', this.movie);
  }

  getPosterPath(movie) {
    if (!this.movie) return '';

    return `https://image.tmdb.org/t/p/w154/${movie.poster_path}`;
  }

  getBackdropPath(movie) {
    if (!this.movie) return '';

    return `https://image.tmdb.org/t/p/w154/${movie.backdrop_path}`;
  }

  startTimer() {
    this.onStartMovie.next(true);
  }

  close() {
    this.onStartMovie.next(true);
  }

}
