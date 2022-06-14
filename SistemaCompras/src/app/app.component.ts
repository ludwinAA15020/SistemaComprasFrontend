import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login:boolean=true;
  registro:boolean=false;
  title = 'SISTEMA COMPRAS';

  constructor(private router: Router){

  }
  ngOnInit(): void {
    let currentUser=sessionStorage.getItem("usuario");
    console.log(currentUser);
    if(currentUser){
      this.login= false;
    }else{
      this.login= true;
      console.log(currentUser);
      this.router.navigate(["/app-listado-producto"]);
    }
    
  }

}
