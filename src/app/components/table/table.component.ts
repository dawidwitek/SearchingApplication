import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Work } from 'src/app/core/models/work.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  @Input() public workData: Work[];
  @Input() public filterData: string = '';
  public dataSource: MatTableDataSource<Work>;

  public displayedColumns: string[] = [
    'work_order_id',
    'description',
    'received_date',
    'assigned_to',
    'status',
    'priority',
  ];

  public ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.workData);
    this.dataSource.filter = this.filterData.trim();
    this.dataSource.filterPredicate = (record: Work, filter: string) => {
      return (
        record.description.toLowerCase().indexOf(filter.toLowerCase()) != -1
      );
    };
  }
}
