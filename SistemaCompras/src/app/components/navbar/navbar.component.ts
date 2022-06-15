import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: string = "";
  usuario: string = "";
  constructor() { }

  ngOnInit(): void {
    let currentUser=sessionStorage.getItem("usuario");
    console.log('Nombre');
    console.log(currentUser);
  }
 
}
