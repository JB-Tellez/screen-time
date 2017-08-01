import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log('params', params);
      let id = params['id'];
      // this.movie = this.moviesService.getMovie(id);
      this.moviesService.getMovie(id).subscribe(movie => this.movie = movie);
    });
  }

  getPosterPath(movie) {
    if (!this.movie) return '';

    return `https://image.tmdb.org/t/p/w154/${movie.poster_path}`;
  }

}
