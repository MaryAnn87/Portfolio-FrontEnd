import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  nombreUsuario!: string;
  password!: string;
  confirmPassword!: string;
  isLogged: boolean = false;
  isLogginFail: boolean = false;
  roles: string[] =[];

    constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

    onRegister() {
      console.log(this.nombreUsuario);
      console.log(this.password);

  }

}
