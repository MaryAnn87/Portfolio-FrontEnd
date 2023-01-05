import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../model/proyecto';
import { SvcProyectoService } from '../service/svc-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

proyecto: Proyecto = null;

constructor(private svcProyecto: SvcProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id =this.activatedRouter.snapshot.params['id'];
    this.svcProyecto.detail(id).subscribe(
      data=> {
        this.proyecto = data;
      },err=>{
        alert("Error al actualizar proyecto");
        this.router.navigate(['']);
    })

    }

    onUpdate():void {
      const id =this.activatedRouter.snapshot.params['id'];
      this.svcProyecto.update(id, this.proyecto).subscribe(data =>{alert("Proyecto actualizado");
      this.router.navigate(['']);
    },err=>{
      alert("Error al actualizar proyecto");
      this.router.navigate(['']);
        })
    }

}
