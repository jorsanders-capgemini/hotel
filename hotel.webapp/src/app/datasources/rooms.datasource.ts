import { DataSource } from '@angular/cdk/table';
import { Room } from '../models/room';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { HotelApiService } from '../services/hotel-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { ViewChild } from '@angular/core';

export class RoomsDataSource extends DataSource<Room> {
    _filterChange = new BehaviorSubject('');
  
    get filter(): string {
      return this._filterChange.value;
    }
  
    set filter(filter: string) {
      this._filterChange.next(filter);
    }
  
    filteredData: Room[] = [];
    renderedData: Room[] = [];
  
    constructor(public _exampleDatabase: HotelApiService,
      public _paginator: MatPaginator,
      public _sort: MatSort) {
      super();
      console.log(_paginator)
      // Reset to the first page when the user changes the filter.
      this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Room[]> {
      // Listen for any changes in the base data, sorting, filtering, or pagination
      const displayDataChanges = [
        this._exampleDatabase.dataChange,
        this._sort.sortChange,
        this._filterChange,
        this._paginator.page
      ];
  
      this._exampleDatabase.getAllIssues();
  
  
      return merge(...displayDataChanges).pipe(map(() => {
        // Filter data
        this.filteredData = this._exampleDatabase.data.slice().filter((issue: Room) => {
          const searchStr = (issue.id + issue.name + issue.capcity).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });
  
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
  
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
        return this.renderedData;
      }
      ));
    }
  
    disconnect() { }
  
  
    /** Returns a sorted copy of the database data. */
    sortData(data: Room[]): Room[] {
      if (!this._sort.active || this._sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        let propertyA: number | string = '';
        let propertyB: number | string = '';
  
        switch (this._sort.active) {
          case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
          case 'title': [propertyA, propertyB] = [a.name, b.name]; break;
          case 'state': [propertyA, propertyB] = [a.capcity, b.capcity]; break;
        }
  
        const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
  
        return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  