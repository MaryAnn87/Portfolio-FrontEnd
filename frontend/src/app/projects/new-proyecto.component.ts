import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../model/proyecto';
import { SvcProyectoService } from '../service/svc-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css'],
})
export class NewProyectoComponent implements OnInit {
  nombrePr: string = '';
  descripcionPr: string = '';
  linkPr: string = '';

  constructor(
    private svcProyectoService: SvcProyectoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const pr = new Proyecto(this.nombrePr, this.descripcionPr, this.linkPr);
    this.svcProyectoService.save(pr).subscribe(
      (data) => {
        alert('Proyecto creado correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo al añadir el proyecto');
        this.router.navigate(['']);
      }
    );
  }
}
