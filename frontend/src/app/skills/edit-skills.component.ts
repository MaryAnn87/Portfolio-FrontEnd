import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../model/skill';
import { SvcSkillService } from '../service/svc-skill.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
 skill:Skill = null;
 
 constructor(private svcSkillService:SvcSkillService, private activatedRouter: ActivatedRoute,private router: Router ){  }
 
 
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.svcSkillService.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
    
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.svcSkillService.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }
}


