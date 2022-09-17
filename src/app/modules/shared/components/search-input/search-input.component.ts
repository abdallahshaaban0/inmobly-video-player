import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, pluck } from 'rxjs'
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {

  @ViewChild('input') inputElement!: ElementRef;
  @Output() onSearch: EventEmitter<{ query: string }> = new EventEmitter<{ query: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.inputElement) {
      fromEvent(this.inputElement.nativeElement, 'keyup')
        .pipe(
          debounceTime(500),
          pluck('target', 'value'),
          distinctUntilChanged(),
        )
        .subscribe(
          (value) => { this.onSearch.emit({ query: this.inputElement.nativeElement.value }) }
        )
    }
  }

}
