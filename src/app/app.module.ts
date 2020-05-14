import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepopanelComponent } from './repopanel/repopanel.component';
import { RepoFilterPipe } from './repo-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter'

@NgModule({
  declarations: [
    AppComponent,
    RepopanelComponent,
    RepoFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
