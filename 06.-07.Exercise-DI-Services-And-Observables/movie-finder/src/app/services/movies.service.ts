import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movies } from '../models/movies';

const apiKey = 'a304b6792d54a080033a47d5b8fda2d3';

@Injectable()
export class MoviesService {

  path: string = 'https://api.themoviedb.org/3/';

  popular: string = 'discover/movie?sort_by=popularity.desc';
  theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  dramas: string = 'discover/movie?with_genres=18&primary_release_year=2014';
  movie: string = 'movie/'

  authentication: string = '&api_key=';
  movieAuth: string = '?api_key=';

  constructor(private http: HttpClient) {

  }
    getMovie(id) : Observable<Movies>{
      return this.http.get<Movies>(`${this.path}${this.movie}${id}${this.movieAuth}${apiKey}`);
    }
    getPopular() : Observable<Movies> {
      return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
    }
    
    getTheaters() : Observable<Movies>{
      return this.http.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`);
    }
    
    getKids() : Observable<Movies>{
      return this.http.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`);
    }

    getDramas() : Observable<Movies>{
      return this.http.get<Movies>(`${this.path}${this.dramas}${this.authentication}${apiKey}`);
    }

    findAMovie(myQuery){
      return this.http.get(`https://api.themoviedb.org/3/search/movie?query=${myQuery}${this.authentication}${apiKey}`)
    }
}