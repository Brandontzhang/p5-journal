import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './components/journal/journal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/journal',
    pathMatch: 'full',
  },
  {
    path: 'journal',
    component: JournalComponent
  },
  {
    path: '**', component: JournalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
