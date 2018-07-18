import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import * as fromComponents from './components';
import { ThreadsService } from './services/threads.service';

import { environment } from '../environments/environment';
/* Not used in production */
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* NGRX Store imports */
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export const metaReducers: MetaReducer<any>[] = environment.production ?
  [storeFreeze] : [];

import { reducers, effects } from './store';

@NgModule({
  declarations: [
    AppComponent,
    ...fromComponents.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    environment.development ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
