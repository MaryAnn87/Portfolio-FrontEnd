import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { SvcEducacionService } from '../service/svc-educacion.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent  implements OnInit {
  educacion: Educacion[]=[];


  constructor (private svcEducacion: SvcEducacionService, private tokenService: TokenService){ }
  isLogged = false;

  ngOnInit():void {

    this.cargarEducacion();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;

    }
  }

   cargarEducacion():void{
    this.svcEducacion.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  delete (id?:number){
    if(id != undefined ){
      this.svcEducacion.delete(id).subscribe(
        data=>{
          this.cargarEducacion();
          alert("Seleccione Aceptar para eliminar la educacion")
        },err=>{
          alert("No se ha podido eliminar la educacion");
        }
      )
       
    }


  }

}
