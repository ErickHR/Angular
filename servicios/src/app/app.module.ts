import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonaComponent } from './persona/persona.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.services';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoggingService,
    PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
