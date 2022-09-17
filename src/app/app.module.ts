import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AngularFireModule } from "@angular/fire";
// import { AngularFirestoreModule } from "@angular/fire/firestore";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './modules/shared/interceptors/cache.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
