import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {
  @Input() title: string;
  @Input() rating: number;
  @Input() shortDescription: string;
  @Input() runtime: number;
  @Input() releaseDate: Date;

  constructor() {
    
  }

  ngOnInit() {

  }
}