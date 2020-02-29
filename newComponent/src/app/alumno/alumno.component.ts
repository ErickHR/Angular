import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent{

  private nombre:string = "Erick";
  private apellido:string = "Rivas";
  private edad:number = 20

  public getNombre():string{
    return this.nombre
  }

  public getApellido():string{
    return this.apellido
  }

  public getEdad():number{
    return this.edad
  }

}
