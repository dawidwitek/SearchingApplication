import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  @Output() public searchText = new EventEmitter<string>();

  public onKeyUp(searchText: KeyboardEvent): void {
    this.searchText.emit((searchText.target as HTMLInputElement).value);
  }
}
