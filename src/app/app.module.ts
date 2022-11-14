import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { PageCardComponent } from './components/page-card/page-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { NewTaskPageComponent } from './pages/new-task-page/new-task-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { StatusCardsComponent } from './components/status-cards/status-cards.component';
import { ExchangePageComponent } from './pages/exchange-page/exchange-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    PageCardComponent,
    LayoutPageComponent,
    HeaderNavComponent,
    NewTaskPageComponent,
    AboutPageComponent,
    StatusCardsComponent,
    ExchangePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
