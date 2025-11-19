import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprendedorListComponent } from './emprendedor-list/emprendedor-list.component';
import { EmprendedorDetailComponent } from './emprendedor-detail/emprendedor-detail.component';

@NgModule({
  declarations: [EmprendedorListComponent, EmprendedorDetailComponent],
  imports: [CommonModule],
  exports: [EmprendedorListComponent, EmprendedorDetailComponent]
})
export class EmprendedorModule { }
