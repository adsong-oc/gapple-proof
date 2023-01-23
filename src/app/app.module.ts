import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ScriptService } from './script.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    RedirectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ScriptService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
