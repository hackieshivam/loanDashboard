
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HeaderComponent } from './ui/header/header.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule , CarouselModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
