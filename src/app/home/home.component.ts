import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Inyeccion de servicio 
  // nombre del servicio 
  constructor(private _userService: UserService) {
    //console.log(this._userService.getUserName());
    alert(this._userService.getUserName());
   }

  ngOnInit() {
  }

}
