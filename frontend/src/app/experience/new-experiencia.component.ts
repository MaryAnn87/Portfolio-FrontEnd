import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { SvcExperienciaService } from '../service/svc-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string ='';
  tituloPuesto: string ='';
  periodo: string = '';
  descripcionE: string = '';
  
  
  constructor(private svcExperiencia: SvcExperienciaService, private router: Router) { }

  ngOnInit(): void{

  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE,this.tituloPuesto, this.periodo, this.descripcionE);
    this.svcExperiencia.save(expe).subscribe(data =>{alert("Experiencia agregada");
      this.router.navigate(['']);
    },err=>{
      alert("Error al cargar información");
      this.router.navigate(['']);
    });
  }

}
