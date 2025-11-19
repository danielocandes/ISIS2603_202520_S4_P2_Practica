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
  totalEmprendedores: number;

  constructor(private s: EmprendedorService, private r: Router) {
    this.emprendedores = [];
    this.totalEmprendedores = 0;
  }

  ngOnInit(): void {
    this.s.getEmprendedores().subscribe((data: Emprendedor[]) => {
      this.emprendedores = data;
      this.totalEmprendedores = this.emprendedores.length;
    });
  }

  seleccionarEmprendedor(emprendedor: Emprendedor): void {
    this.r.navigate(['/emprendedores', emprendedor.id]);
  }
}
