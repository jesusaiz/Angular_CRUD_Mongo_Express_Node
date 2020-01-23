import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from '@angular/core';
import { TareaModel } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';
import { Observable } from 'rxjs';
import { Subscription} from 'rxjs';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class TareaListaComponent {
  dataSource:TareaModel[]=[];
  displayedColumns: string[] = ['titulo', 'fecha', 'estado','description', 'action'];
  expandedElement: TareaModel;
  private subscription: Subscription = null;
  
  
 

  constructor(private tareaService: TareaService) { }
  
  

  ngOnInit(): void {
    this.refreshTable();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  refreshTable(): void {
    this.subscription = this.tareaService.getAllTareas().subscribe(
      data => {
    //  this.isLoadingResults = false;
      this.dataSource = data;
    });
  }

  deleteTarea(id:string) {
    this.tareaService.deleteTarea(id)
      .subscribe(data=>console.log(data),
              error=>console.log(error));
      
             this.refreshTable();
  }

  
}
