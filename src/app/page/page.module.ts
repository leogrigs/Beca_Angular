import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemvindoComponent } from './bemvindo/bemvindo.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { BioComponent } from './bio/bio.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    FormsComponent,
    TodoComponent,
    BemvindoComponent,
    NotfoundComponent,
    BioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [
    FormsComponent,
    TodoComponent,
    BemvindoComponent,
    NotfoundComponent
  ]
})
export class PageModule { }
