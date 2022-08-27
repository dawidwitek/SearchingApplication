import { Component, OnInit } from '@angular/core';
import { ServerData } from 'src/app/core/models/serverData.interface';
import { Work } from 'src/app/core/models/work.interface';
import { ServerDataService } from 'src/app/core/services/server-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public workData: Work[];
  public filterData: string = '';

  constructor(private serverService: ServerDataService) {}

  public ngOnInit(): void {
    this.serverService
      .getData()
      .then((response: ServerData) => (this.workData = response.response.data))
      .catch((error: Error) => console.log(error));
  }

  getSearchValue(searchValue: string): void {
    this.filterData = searchValue;
  }
}
