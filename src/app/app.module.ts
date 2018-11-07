import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GravatarModule } from 'ngx-gravatar';
import { LoginModule } from './pages/login/login.module';
import { HomeComponent } from './pages/home';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        MDBBootstrapModule.forRoot(),
        NgxPermissionsModule.forRoot(),
        NgxMyDatePickerModule.forRoot(),
        GravatarModule,
        LoginModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
