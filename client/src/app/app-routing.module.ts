import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveysComponent } from './pages/surveys/surveys.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data:{title: 'Landing Page'}},
  {path: 'surveys', component: SurveysComponent, data:{title: 'Surveys'}},
  {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
