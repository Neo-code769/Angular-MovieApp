import { Component, OnInit } from '@angular/core';

import { Genre, Movie } from '../types';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies:Movie[] = [];

  selectedGenre: Genre = {
    "id": -1,
    "name": "Tous les genres"
  };

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies()
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  filterGenres(selectedGenre: Genre){
      this.selectedGenre = selectedGenre;
  }

}
