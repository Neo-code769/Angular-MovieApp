export class Movie {
    id!: number;
    title!: string;
    poster_path!: string;
    overview!: string;
    vote_average!: number;
    runtime!: number;
    release_date!: string;
    genres!: Array<{id: number, name: string}>;
    genre_ids!:number[];
    original_language!: string;
    comments!: Comment[];
  }

export class Genre {
  id!: number;
  name!: string;
}

export class Comment{
  id!: number;
  movieId!: number;
  text!: string;
  rating!: number;
  date!: string;
}