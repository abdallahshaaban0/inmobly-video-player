import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TablePaginatorComponent } from './components/table-paginator/table-paginator.component';



@NgModule({
  declarations: [
    StarRatingComponent,
    SearchInputComponent,
    TablePaginatorComponent
  ],
  imports: [
    CommonModule,
    RatingModule.forRoot(), // Use forRoot to import the StarRatingModule
    FormsModule,
  ],
  providers: [
  ],
  exports: [
    StarRatingComponent,
    SearchInputComponent,
    TablePaginatorComponent
  ]
})
export class SharedModule { }
