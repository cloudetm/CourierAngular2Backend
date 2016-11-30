import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {DataTableModule} from "angular2-datatable";
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBi7JS8u53VBy6PAYKOBGmihPIPjdjODKQ",
  authDomain: "courierapp-59940.firebaseapp.com",
  databaseURL: "https://courierapp-59940.firebaseio.com",
  storageBucket: "courierapp-59940.appspot.com",
  messagingSenderId: "600909105396"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    DataTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQa4JeO-nBNdi4icFnvBKbyPT46qEAIoQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
