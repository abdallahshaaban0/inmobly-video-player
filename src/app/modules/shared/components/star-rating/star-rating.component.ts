import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  max = 5;
  @Input() value: number = 3.5;
  constructor() { }

  ngOnInit(): void {
  }

}
