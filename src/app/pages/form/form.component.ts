import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  hide:boolean = false

  miArray:any = [];

  dataForm = new FormGroup({
    name: new FormControl,
    email: new FormControl,
    pass: new FormControl
  })

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDatos(){
    let data = this.dataForm.value;
    this.miArray.push(data.name, data.email, data.pass)
    this.hide = true;
  }

}
