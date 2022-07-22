import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideFilterComponent } from './components/body/aside-filter/aside-filter.component';
import { SectionComponent } from './components/body/section/section.component';
import { AsideRightComponent } from './components/body/aside-right/aside-right.component';
import { OptionsComponent } from './components/header/options/options.component';
import { LogoGpComponent } from './components/header/logo-gp/logo-gp.component';
import { AnunciecompComponent } from './components/header/anunciecomp/anunciecomp.component';
import { CardModelComponent } from './components/body/section/card-model/card-model.component';
import { ListaAtributosComponent } from './components/body/section/card-model/lista-atributos/lista-atributos.component';
import { SliderCardModelComponent } from './components/body/section/card-model/slider-card-model/slider-card-model.component';
import { SobreComponentComponent } from './components/body/section/card-model/sobre-component/sobre-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AsideFilterComponent,
    SectionComponent,
    AsideRightComponent,
    OptionsComponent,
    LogoGpComponent,
    AnunciecompComponent,
    CardModelComponent,
    ListaAtributosComponent,
    SliderCardModelComponent,
    SobreComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
