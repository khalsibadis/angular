import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { SharedServiceService } from '../service/shared-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor(private sharedService: SharedServiceService,private router: Router) {}

  ngOnInit(): void {
    this.sharedService.sharedPays.subscribe((listPays: any) => {

        this.listPays=listPays;
    });
  }

  /////Modal
  @ViewChild('largeModal') public largeModal: ModalDirective;
  searchText: any;

  listPays = []

  ////////Download File CSV
  fileDownload() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'report',
      useBom: true,
      noDownload: false,
      headers: [
        'nom',
        'Populatuin',
        'Superficie',
        'contient',
        'produit',
        'image',
      ],
    };

    new ngxCsv(this.listPays, 'report', options);
  }

  /////////////Tri
  triNom() {
    this.listPays.sort((a, b) => a.nom.localeCompare(b.nom));
  }
  triCont() {
    this.listPays.sort((a, b) => a.contient.localeCompare(b.contient));
  }
  triPop() {
    this.listPays.sort((a, b) => {
      return a.population - b.population;
    });
  }

  triSuper() {
    this.listPays.sort((a, b) => {
      return a.superficie - b.superficie;
    });
  }

  triProd() {
    this.listPays.sort((a, b) => {
      return a.produit - b.produit;
    });
  }






  ev : any
  upData(pays: any) {
    this.ev=localStorage.setItem("paysDetails",JSON.stringify(pays))
  this.router.navigate(["pays"]);
}
}
