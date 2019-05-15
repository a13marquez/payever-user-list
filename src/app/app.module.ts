import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersParentComponent } from './users-parent/users-parent.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UserRoutingModule } from './user-routing.module';
import { RequestCache } from './request-cache.service';
import { CachingInterceptor } from './cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersParentComponent,
    UsersDetailComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserRoutingModule,
    AppRoutingModule
  ],
  providers: [
    RequestCache, {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
