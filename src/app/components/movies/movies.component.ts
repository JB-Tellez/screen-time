import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @ViewChild('childModal') public childModal:ModalDirective;

  movies;
  selectedMovie;

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

      // tv eg path
      //path = 'https://image.tmdb.org/t/p/w600/knQW68IH5lFzN9D5gKVe2ScCKYu.jpg'
    }

    return path;

  }

  movieClicked(slideIndex, colIndex) {
    
    
    this.selectedMovie = this.getMovie(slideIndex, colIndex);

    console.log('selectedMovie', this.selectedMovie);

    this.showChildModal();

    // this.router.navigate(['/movie', movie.id])
  }

    public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }

}
