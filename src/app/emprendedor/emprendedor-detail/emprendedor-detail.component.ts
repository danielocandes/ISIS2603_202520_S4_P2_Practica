import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmprendedorService } from '../emprendedor.service';
import { EmprendedorDetail } from '../emprendedor-detail';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent implements OnInit {
  emprendedorDetail: EmprendedorDetail | null = null;

  constructor(private route: ActivatedRoute, private s: EmprendedorService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.s.getEmprendedorDetail(id).subscribe((data: EmprendedorDetail) => {
      this.emprendedorDetail = data;
    });
  }
}
