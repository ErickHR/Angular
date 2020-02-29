import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() boton:boolean

  @ViewChild('txtnombre',{static:false}) nombre:ElementRef

  mensaje:string = ""

  constructor(private logginService:LoggingService, private personaService:PersonasService) {
    this.personaService.saludar.subscribe(
      (indice:number) => alert("el indice es: " + indice)
    )
  }

  ngOnInit() {
  }

  onCrear(txtApellido:HTMLInputElement){

    if(this.nombre.nativeElement.value != "" && txtApellido.value != ""){
      this.personaService.agregarPersona(new Persona(this.nombre.nativeElement.value, txtApellido.value))
      this.mensaje = "agregado...."
    }else{
      this.mensaje = "error"
    }

  }

}
