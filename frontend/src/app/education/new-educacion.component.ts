import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../model/educacion';
import { SvcEducacionService } from '../service/svc-educacion.service';


@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit{
  nombreInstitucion: string ='';
  tituloEd: string ='';
  periodo: string = '';
  descripcionEd: string = '';


  constructor(private svcEducacion: SvcEducacionService,private router: Router) { }
 
  ngOnInit(): void {
    }

  onCreate(): void {
    const educacion = new Educacion(this.nombreInstitucion, this.tituloEd, this.periodo, this.descripcionEd);
    this.svcEducacion.save(educacion).subscribe(
      data =>{
        alert("Educación agregada correctamente")
        this.router.navigate(['']);
      },err =>{
        alert("Error al agregar educación");
        this.router.navigate(['']);
      }
    ); 
  }
      
}
