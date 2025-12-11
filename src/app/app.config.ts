import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { routes } from './app.routes';

import { FavoritePollutionsState } from './pollution_managment/pollution-store/states/favorite-pollutions.state';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
    NgxsModule.forRoot([FavoritePollutionsState]),
    NgxsStoragePluginModule.forRoot({
      keys: ['favoritePollutions']  // Persist ONLY favoritePollutions state
    })
  ),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
  ]
};
