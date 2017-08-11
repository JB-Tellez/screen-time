import { CreateViewingAction } from './../../store/actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { State, Viewing, Kid } from "../../store/model";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  @ViewChild('childModal') public childModal:ModalDirective;

  movies;
  selectedMovie;
  getMovieSub;

  constructor(private router: Router, private moviesService: MoviesService, private store:Store<State>) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

  ngOnDestroy() {
    if (this.getMovieSub) this.getMovieSub.unsubscribe();
  }

  onStartMovie() {

    let kid:Kid;

    this.store.select('app', 'kid').subscribe( k => {

      console.log('k', k);
      kid = k;
    });
    
    const duration:number = this.selectedMovie.runtime * 60000;

    const endTime = new Date(Date.now() + duration);

    const viewing:Viewing = {
      _id: undefined,
      title: this.selectedMovie.title,
      movieId: this.selectedMovie.id,
      showId: undefined,
      startTime: new Date(),
      endTime: endTime,
      kid: kid
    };

    console.log('onStartMovie', viewing, this.selectedMovie);

    this.hideChildModal();
    
    this.store.dispatch(new CreateViewingAction(viewing));
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

    this.getMovieSub = this.moviesService.getMovie(this.selectedMovie.id).subscribe( movie => {
      this.selectedMovie.runtime = movie.runtime;
      this.showChildModal();
    }, error => console.log(error));
    

    // this.router.navigate(['/movie', movie.id])
  }

    public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }

}
