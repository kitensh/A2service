import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CorsInterceptor } from './CorsInterceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JogoService } from './services/jogo.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    ListarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true },JogoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
