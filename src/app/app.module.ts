import { CustomerService } from './customer.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { CustomerComponent } from './customer/customer.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    CustomerComponent,
    BindingComponent,
    HomeComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"binding",
        component:BindingComponent
      },
      {
        path:"courses",
        component:CourseComponent
      },
      {
        path:"directives",
        component:DirectivesComponent
      }
    ])
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
