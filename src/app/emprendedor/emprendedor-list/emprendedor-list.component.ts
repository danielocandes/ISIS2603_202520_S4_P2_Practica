import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmprendedorService } from '../emprendedor.service';
import { Emprendedor } from '../emprendedor';

@Component({
  selector: 'app-emprendedor-list',
  standalone: false,
  templateUrl: './emprendedor-list.component.html',
  styleUrl: './emprendedor-list.component.css'
})
export class EmprendedorListComponent implements OnInit {
  emprendedores: Emprendedor[];

  constructor(private s: EmprendedorService, private r: Router) {
    this.emprendedores = [];
  }

  ngOnInit(): void {
    this.s.getEmprendedores().subscribe((data: Emprendedor[]) => {
      this.emprendedores = data;
    });
  }

  seleccionarEmprendedor(emprendedor: Emprendedor): void {
    this.r.navigate(['/emprendedores', emprendedor.id]);
  }
}
