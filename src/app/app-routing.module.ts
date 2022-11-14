import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ExchangePageComponent } from './pages/exchange-page/exchange-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewTaskPageComponent } from './pages/new-task-page/new-task-page.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'task-list',
        component: TaskListComponent,
      },
      {
        path: 'new-task/:id',
        component: NewTaskPageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'exchange',
        component: ExchangePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
