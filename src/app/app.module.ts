import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from'@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EditTareaComponent } from './edit-tarea/edit-tarea.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TareaService } from './shared/tarea.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';





const appRoutes: Routes= [
  { path:'tareas', component:TareaListaComponent},
  { path:'tareas/:id/edit', component:EditTareaComponent },
  { path:'tareas/new', component:EditTareaComponent },
  { path:'**', redirectTo:'/tareas', pathMatch:'full'} ];

@NgModule({
  declarations: [
    AppComponent,
    TareaListaComponent,
    EditTareaComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
   
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
