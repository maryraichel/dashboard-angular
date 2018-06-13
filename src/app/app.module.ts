import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { DataviewComponent } from './dataview/dataview.component';
import { OurstaffComponent } from './ourstaff/ourstaff.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    DataviewComponent,
    OurstaffComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([ //localhost/path1/path2
      {
        path:'admin',
        component:AdminComponent

      },
      
      {
        path:'login',//localhost/login
        component:LoginComponent
      },
      {
        path:'dataview',//localhost/login
        component:DataviewComponent
      },
      {
        path:'ourstaff',//localhost/login
        component:OurstaffComponent
      },
      {
        path:'',
        component:HomeComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
