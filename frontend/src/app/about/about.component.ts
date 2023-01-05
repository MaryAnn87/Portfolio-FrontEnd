import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: Persona = null;

  constructor(public personaService: PersonaService , private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;

    }
   }

   cargarPersona():void{
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data});
    
  }


}
