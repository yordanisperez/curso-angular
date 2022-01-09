import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-libro-imagenes',
  templateUrl: './libro-imagenes.component.html',
  styleUrls: ['./libro-imagenes.component.css']
})
export class LibroImagenesComponent implements OnInit {
  idLibro?: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.parent)
      this.route.parent.paramMap.subscribe((params: ParamMap) => {
        let idstr = params.get('id')
        this.idLibro = idstr ? parseInt(idstr) : undefined;
      });
  }

}
