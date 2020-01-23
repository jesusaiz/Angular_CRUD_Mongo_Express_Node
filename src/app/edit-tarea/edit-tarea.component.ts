import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute, Router} from'@angular/router';
import { TareaModel} from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css'],
})


export class EditTareaComponent implements OnInit {
  tarea: TareaModel;
  estados: string[] = ['Por Hacer', 'En Progreso', 'Hecha'];
  
  

  constructor(private route: ActivatedRoute, private router: Router, private tareaService: TareaService) { }

  ngOnInit() {
  
    this.route.paramMap
      .map(params => params.get('id'))
      .pipe(switchMap(id => {
          if (id) return this.tareaService.getTarea(id);
          else return Observable.of(new TareaModel("","",new Date(), "", ""));
      }))
      .subscribe(tarea => {this.tarea = tarea; console.log(tarea);}, error => {console.log(error)});
  }

  onSubmit(){
    if (this.tarea._id)
      this.tareaService.updateTarea(this.tarea)
        .subscribe(data => {console.log(data); this.router.navigate(['/tareas']);},error=>console.log(error));
    else
      this.tareaService.addTarea(this.tarea)
        .subscribe(data => {console.log(data); this.router.navigate(['/tareas']);},error=>console.log(error));
  }

}
