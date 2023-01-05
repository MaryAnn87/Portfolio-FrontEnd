import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { SvcProyectoService } from '../service/svc-proyecto.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proyecto:Proyecto []=[];

  constructor(private svcProyecto: SvcProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
   }

   cargarProyecto():void{
    this.svcProyecto.lista().subscribe(data =>{this.proyecto = data;})
  }

  delete (id?:number){
    if(id != undefined ){
      this.svcProyecto.delete(id).subscribe(
        data=>{
          this.cargarProyecto();
          alert("Seleccione Aceptar para eliminar el proyecto")
        },err=>{
          alert("No se ha podido eliminar el proyecto");
        }
      )
       
    }


  }

}
