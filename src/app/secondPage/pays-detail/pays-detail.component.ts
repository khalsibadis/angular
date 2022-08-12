import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pays-detail',
  templateUrl: './pays-detail.component.html',
  styleUrls: ['./pays-detail.component.css']
})
export class PaysDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pays : any
  upData() {
    this.pays = JSON.parse(<string>localStorage.getItem("paysDetails"));
    console.log(this.pays);
  }

}
