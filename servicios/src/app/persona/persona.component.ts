import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.services';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona:Persona
  @Input() indice:number

  constructor(private personaService:PersonasService) { }

  ngOnInit() {
  }

  onEmitirSaludo():void{
    this.personaService.saludar.emit(this.indice)
  }

}
