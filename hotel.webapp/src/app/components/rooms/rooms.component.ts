import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Room } from 'src/app/models/room';
import { HotelApiService } from 'src/app/services/hotel-api.service';
import { AddDialogComponent } from '../dialogs/add/add.dialog.component';
import { EditDialogComponent } from '../dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete/delete.dialog.component';
import { RoomsDataSource } from 'src/app/datasources/rooms.datasource';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  public readonly displayedColumns = ['id', 'name', 'capacity'];
  dataSource: RoomsDataSource;
  index: number;
  id: number;

  constructor(
    public httpClient: HttpClient,
    public matDialog: MatDialog,
    private readonly hotelApiService: HotelApiService
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  public ngOnInit() {
    this.loadData();
  }

  public refresh() {
    this.loadData();
  }

  public addNew(issue: Room) {
    const dialogRef = this.matDialog.open(AddDialogComponent, {
      data: { issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.hotelApiService.dataChange.value.push(
          this.hotelApiService.getDialogData()
        );
        this.refreshTable();
      }
    });
  }

  startEdit(id: number, name: string, capacity: number) {
    this.id = id;
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: { id, name, capacity: capacity }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.hotelApiService.dataChange.value.findIndex(
          x => x.id === this.id
        );
        this.hotelApiService.dataChange.value[
          foundIndex
        ] = this.hotelApiService.getDialogData();
        this.refreshTable();
      }
    });
  }

  deleteItem(i: number, id: number, name: string, capacity: number) {
    this.index = i;
    this.id = id;
    const dialogRef = this.matDialog.open(DeleteDialogComponent, {
      data: { id: id, name: name, capacity: capacity }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.hotelApiService.dataChange.value.findIndex(
          x => x.id === this.id
        );
        this.hotelApiService.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }

  private refreshTable() {
    // Refreshing table using paginator
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  public loadData() {
    this.dataSource = new RoomsDataSource(
      this.hotelApiService,
      this.paginator,
      this.sort
    );
    fromEvent(this.filter.nativeElement, 'keyup').subscribe(() => {
      if (!this.dataSource) {
        return;
      }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }
}
