import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { OAuthModule } from 'angular-oauth2-oidc';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { AppRoutingModule, APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home-entry/home.module';
import { AuthGuard } from './services/auth.guard.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { SettingsService } from './services/settings.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CommonModule } from '@angular/common';
// import { GaugeChartModule } from 'angular-gauge-chart';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BroadcastService } from './broadcast.service';
import { ViewProductPageModule } from 'src/app/view-product/view-product.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(APP_ROUTES),
    // GaugeChartModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ViewProductPageModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    FirebaseX,
    SettingsService,
    AuthGuard,
    InAppBrowser,
    BroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
