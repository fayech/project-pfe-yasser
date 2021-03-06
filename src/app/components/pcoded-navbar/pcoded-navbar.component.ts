import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pcoded-navbar',
  templateUrl: './pcoded-navbar.component.html',
  styleUrls: ['./pcoded-navbar.component.sass']
})
export class PcodedNavbarComponent implements OnInit {

  
  ngOnInit(): void {
  }
  userForm:FormGroup;
  listData:any;


  constructor(private fb:FormBuilder  ){

      this.listData = [];

    this.userForm = this.fb.group({
      name : ['', Validators.required],
      description : ['', Validators.required],
      Start: ['', Validators.required],
      Due: ['', Validators.required]
    })
  }

  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }

  removeItems(element:any){
    this.listData.forEach((value:any,dex:any) => {
      if(value == element){
        this.listData.splice(dex,1)
      }

    });


  }

}

