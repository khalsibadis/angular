import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SharedServiceService } from '../service/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  addForm: FormGroup;



savePays(){
  this.sharedService.nextPays(this.addForm.value)

}

  constructor(private fb: FormBuilder,private sharedService: SharedServiceService) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      superficie: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]'),
      ]),
      contient: new FormControl('', [Validators.required]),
      produit: new FormControl('', [Validators.required]),
      population: new FormControl('', [Validators.required]),
    };

    this.addForm = this.fb.group(formControls);
  }

  get nom() {
    return this.addForm.get('nom');
  }
  get superficie() {
    return this.addForm.get('superficie');
  }
  get contient() {
    return this.addForm.get('contient');
  }
  get produit() {
    return this.addForm.get('produit');
  }
  get population() {
    return this.addForm.get('population');
  }

  ngOnInit(): void {
    console.log(this.addForm.value);

  }

  @ViewChild('largeModal') public largeModal: ModalDirective;








}
