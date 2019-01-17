import { CustomerService } from './customer.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { CustomerComponent } from './customer/customer.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import {AutoSizeInputModule} from 'ngx-autosize-input';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    CustomerComponent,
    BindingComponent,
    HomeComponent,
    DirectivesComponent,
    ContactFormComponent,
    PasswordchangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutoSizeInputModule,  
    ReactiveFormsModule,  
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
      },
      {
        path:"contact-forms",
        component:ContactFormComponent
      },
      {
        path:"passwordChange",
        component:PasswordchangeComponent
      }
    ])
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
