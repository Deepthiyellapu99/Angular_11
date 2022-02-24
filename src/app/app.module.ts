import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps//maps.component';
import { FileComponent } from './components/file/file.component';
import { FileService } from './services/file.service';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

// import { PowerBIEmbedModule } from 'powerbi-client-angular';
@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    FileComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // PowerBIEmbedModule,
    AgmCoreModule.forRoot({
       // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: '',
      libraries: ['places']
   })

  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
