import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent{
  agregarAlumno:boolean = false
  agregarAlumnoStatus: string = "No se a agregado ninguna Alumno"
  tituloAlumno:string = ""
  texto:string = "Erick Rivas"
  constructor(){
    setTimeout(
      () => {
        this.agregarAlumno = true
    }, 3000);
  }

  onCrearAlumno():void{
    this.agregarAlumnoStatus = "Alumno agregada"
  }

  onModificarAlumno(event:Event):void{

    this.tituloAlumno = (<HTMLInputElement>event.target).value;

  }

}
