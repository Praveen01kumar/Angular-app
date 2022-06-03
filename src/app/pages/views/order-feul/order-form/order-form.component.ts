import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  photo = './assets/images/slider2.png'
  public firstcolor = "#000";
  public secondcolor = "#787878";
  public thirdcolor = "#ff0000";
  public fourcolor = "#ffee00";
  public fivecolor = "#ffc7c7";
  public sixcolor = "#ffa3a3";
  orderForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeOrderForm();
  }

  get f() {
    return this.orderForm.controls;
  }

  /**
   * Initialize Order form
   */
  initializeOrderForm(){
    this.orderForm = this.fb.group({
      fuelType:[true],
      addresone:[''],
      addrestwo:[''],
      tankfuel:[''],
      tanksize:['']
    })
  }

  submitForm(){

  }

}
