import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GravatarModule } from 'ngx-gravatar';
import { LoginModule } from './pages/login/login.module';
import { HomeComponent } from './pages/home';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        MDBBootstrapModule.forRoot(),
        GravatarModule,
        LoginModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
