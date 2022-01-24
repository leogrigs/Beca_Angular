import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from './core/core.module';
import { PageModule } from './page/page.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PageModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
