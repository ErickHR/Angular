import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{
  personas:Persona[] = [
    new Persona("Erick", "Rivas"),
    new Persona("Isaac", "Huarancca")
  ]

  saludar = new EventEmitter<number>()

  constructor(private loggingService:LoggingService){

  }

  agregarPersona(persona:Persona):void{
    this.loggingService.enviarMensaje("se agrego, service")
    this.personas.push(persona)
  }

}
