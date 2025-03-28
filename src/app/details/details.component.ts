import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../types';
import { MovieService } from './../movie.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie?: Movie;
  acronymForLanguage: {[key: string]:string} = {"en":"English","fr":"French","ja":"Japanese"};
  
  commentData: FormGroup;
  error = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService, private fb: FormBuilder) {
    this.commentData = this.fb.group({
      rating: '',
      text: '',
    })
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe({
      next: (movie: Movie) => {
        this.movie = movie;
        this.movie.original_language = this.acronymForLanguage[this.movie.original_language] ?
        this.acronymForLanguage[this.movie.original_language] : this.movie.original_language;
      },
      error: (error: string) => {
        console.error(error);
      }
    });
  }

  addPost() {
    const commentData = this.commentData.value;
    const movieId = this.movie ? this.movie.id: -1;
    // console.log et console.error sont juste temporaires
    this.movieService.postComment(commentData,movieId)
    .subscribe({
      next: post => {
        console.log(`post created with id ${post.id}`);
      },
      error: error => {
        this.error = error.error.error;
        console.log(error.error.error);
      }
    });
  }

}
