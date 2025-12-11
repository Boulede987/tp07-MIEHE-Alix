import { Routes } from '@angular/router';
import { ListPollutions } from './components/list-pollutions/list-pollutions';
import { FormDelcarationPollution } from './components/form-delcaration-pollution/form-delcaration-pollution';
import { ListFavoritePollutions } from './components/list-favorite-pollutions/list-favorite-pollutions';

export const POLLUTION_ROUTES: Routes = [
    { path: 'create', component: FormDelcarationPollution },
    { path: 'list', component: ListPollutions },
    { path: 'edit/:id', component: FormDelcarationPollution },
    { path: 'favorites', component: ListFavoritePollutions}
];