import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { SvcExperienciaService } from '../service/svc-experiencia.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  experiencia:Experiencia []=[];

  constructor(private svcExperiencia: SvcExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

    cargarExperiencia():void{
      this.svcExperiencia.lista().subscribe(data =>{this.experiencia = data;})
    }

    delete (id?:number){
      if(id != undefined ){
        this.svcExperiencia.delete(id).subscribe(
          data=>{
            this.cargarExperiencia();
          },err=>{
            alert("No se ha podido eliminar la experiencia");
          }
        )
         
      }


    }

}
