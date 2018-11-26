import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  popular: Object;
  theaters: Object;
  kids: Object;
  dramas: Object;
  searchResults: any;
  isSearch: boolean = false;

  constructor(private moviesService: MoviesService) { }

  search(myQuery) {
    let value = myQuery['search']
    this.moviesService.findAMovie(value).subscribe(data => {
      this.searchResults = data;
      console.log(this.searchResults);
      if(this.searchResults.results.length > 0){
        this.isSearch = true;
      }
    })
  }

  ngOnInit() {
    this.moviesService
        .getPopular()
        .subscribe(data =>{
          this.popular = data;
        })

    this.moviesService
        .getTheaters()
        .subscribe(data =>{
          this.theaters = data;
          console.log(this.theaters)
        })

    this.moviesService
        .getKids()
        .subscribe(data =>{
          this.kids = data;
          console.log(this.kids)
        })

    this.moviesService
        .getDramas()
        .subscribe(data =>{
          this.dramas = data;
          console.log(this.dramas)
        })
  }
}
