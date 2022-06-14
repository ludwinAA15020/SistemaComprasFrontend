import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("idusuario");
    sessionStorage.removeItem("role");
    let currentUser=sessionStorage.getItem("usuario");
    console.log(currentUser);
    window.location.href = "/";
  }

}
