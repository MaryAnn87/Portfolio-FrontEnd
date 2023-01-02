import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from '../model/educacion';
import { SvcEducacionService } from '../service/svc-educacion.service';


@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})

export class EditEducacionComponent implements OnInit{
  edu: Educacion = null;

  constructor(private svcEducacion: SvcEducacionService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.svcEducacion.detail(id).subscribe(data => {
      this.edu = data;
    },err=>{
      alert("Ups!");
      this.router.navigate(['']);
    })
    
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.svcEducacion.update(id, this.edu).subscribe(
      data => {alert("Educación actualizada correctamente");
      this.router.navigate(['']);
      },err =>{
      alert("Error al editar la educación");
      this.router.navigate(['']);
      })
  }

}