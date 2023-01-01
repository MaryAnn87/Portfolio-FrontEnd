import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { SvcExperienciaService } from '../service/svc-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  expLab: Experiencia = null;
  
  constructor(private svcExperiencia: SvcExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id =this.activatedRouter.snapshot.params['id'];
    this.svcExperiencia.detail(id).subscribe(
      data=> {
        this.expLab = data;
      },err=>{
        alert("Error al actualizar experiencia");
    })
  }

  onUpdate():void {
    const id =this.activatedRouter.snapshot.params['id'];
    this.svcExperiencia.update(id, this.expLab).subscribe(data =>{alert("Experiencia actualizada");
    this.router.navigate(['']);
  },err=>{
    alert("Error al actualizar experiencia");
    this.router.navigate(['']);
      })
  }


}



    
