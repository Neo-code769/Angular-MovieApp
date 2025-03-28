import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GenreService } from './../genre.service';
import { Genre } from '../types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() postSelectedGenre = new EventEmitter<Genre>();
  
  genres:Genre[] = [];

  genreDefault:Genre = {"id":-1,"name":"Tous les genres"};

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres()
      .subscribe(genres => {
        this.genres = genres;
      });
  }

  selectGenreFilm(selectedGenre: Genre){
    this.postSelectedGenre.emit(selectedGenre);
  }

}
