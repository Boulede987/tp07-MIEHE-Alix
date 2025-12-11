import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavoritePollutionsTag } from '../favorite-pollutions-tag/favorite-pollutions-tag';

@Component({
  selector: 'app-pollution-navbar',
  imports: [RouterModule, FavoritePollutionsTag], // nécessaire pour la naviguation via router
  templateUrl: './pollution-navbar.html',
  styleUrl: './pollution-navbar.scss'
})
export class PollutionNavbar {

}
