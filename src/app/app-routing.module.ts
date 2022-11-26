import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewTaskPageComponent } from './pages/register-page/register-page.component';
import { TaskListComponent } from './pages/student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student-list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'student-list',
        component: TaskListComponent,
      },
      {
        path: 'register/:id',
        component: NewTaskPageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
