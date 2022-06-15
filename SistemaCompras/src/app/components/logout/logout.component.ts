import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('entro al logout');
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("idusuario");
    sessionStorage.removeItem("role");
    console.log(sessionStorage);
    window.location.href = "./";
   



  
  }

}
