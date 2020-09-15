import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { GaugeModule } from 'angular-gauge';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GaugeModule.forRoot()
  ],
  providers: [GaugeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
