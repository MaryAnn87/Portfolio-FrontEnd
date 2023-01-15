import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../model/persona';
import { PersonaService } from '../service/persona.service';
import { ImageService} from '../service/image.service'

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit{
  persona: Persona = null;

  constructor(private Persona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }


  ngOnInit(): void {
    const id =this.activatedRouter.snapshot.params['id'];
    this.Persona.detail(id).subscribe(
      data=> {
        this.persona = data;
      },err=>{
        alert("Error al actualizar perfil");
        this.router.navigate(['']);
    });
  }

  onUpdate(){
    const id =this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.Persona.update(id, this.persona).subscribe(data =>{alert("Perfil actualizado");
    this.router.navigate(['']);
  },err=>{
    alert("Error al actualizar perfil");
    this.router.navigate(['']);
      });

  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name ="perfil_"+id;
    this.imageService.uploadImage($event,name);
  }



}

