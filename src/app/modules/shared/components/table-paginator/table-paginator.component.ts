import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss']
})
export class TablePaginatorComponent implements OnInit {
  @Input() nextPageToken: string = '';
  @Input() prevPageToken: string = '';
  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(buttonData: { pageToken: string }) {
    const TOKEN = buttonData.pageToken
    if (TOKEN) {
      this.onButtonClicked.emit(buttonData)
    }
  }
}
