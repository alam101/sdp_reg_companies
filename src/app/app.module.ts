import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { OAuthModule } from 'angular-oauth2-oidc';


import { AppRoutingModule, APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home-entry/home.module';
import { AuthGuard } from './services/auth.guard.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { SettingsService } from './services/settings.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CommonModule } from '@angular/common';
import { GaugeChartModule } from 'angular-gauge-chart';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(APP_ROUTES),
    GaugeChartModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    SettingsService,
    AuthGuard,
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
