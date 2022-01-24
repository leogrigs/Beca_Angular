import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemvindoComponent } from './page/bemvindo/bemvindo.component';
import { BioComponent } from './page/bio/bio.component';
import { FormsComponent } from './page/forms/forms.component';
import { NotfoundComponent } from './page/notfound/notfound.component';

const routes: Routes = [
     { path: '', component: BemvindoComponent},
     { path: 'cadastro', component: FormsComponent},
     { path: 'bio', component: BioComponent},
     { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }