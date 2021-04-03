import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-manual',
  templateUrl: './add-manual.component.html',
  styleUrls: ['./add-manual.component.css']
})
export class AddManualComponent implements OnInit {

  files: File[] = [];
  addProductForm: FormGroup;
  mainDivision: '';
  mainCategory: '';
  productImages = [];
  isAddOn = false;

  constructor(
    private fb: FormBuilder,
    private location: Location
  ) {
    this.addProductForm = this.fb.group({
      productId: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      brandName: new FormControl(''),
      description: new FormControl(''),
      model: new FormControl(''),
      variantType: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      discountPrice: new FormControl(''),
      category: new FormControl('category 01', Validators.required),
      percentage: new FormControl(''),
      adminPercentage: new FormControl(''),
      status: new FormControl('live'),
      trending: new FormControl('yes'),
      packSize: new FormControl('10 ltr', Validators.required),
      quantity: new FormControl('', Validators.required),
      deliveryMode: new FormControl('instant', Validators.required),
      lengthOrWidth: new FormControl('', Validators.required),
      taxableValue: new FormControl('', Validators.required),
      addOn: new FormControl('no'),
      addOnProductId: new FormControl('',  ),
      addOnQuantity: new FormControl('10 ltr'),
      addOnPrice: new FormControl('')
    });
   }

  ngOnInit() {
  }

  saveAndSubmit() {
    console.log(this.addProductForm);
  }

  addOnChange() {
    if (this.addProductForm.controls.addOn.value === 'yes') {
      this.isAddOn = true;
      this.addProductForm.get('addOnProductId').setValidators([Validators.required]);
      this.addProductForm.get('addOnProductId').updateValueAndValidity();
      this.addProductForm.get('addOnQuantity').setValidators([Validators.required]);
      this.addProductForm.get('addOnQuantity').updateValueAndValidity();
      this.addProductForm.get('addOnPrice').setValidators([Validators.required]);
      this.addProductForm.get('addOnPrice').updateValueAndValidity();
    } else {
      this.isAddOn = false;
      this.addProductForm.get('addOnProductId').clearValidators();
      this.addProductForm.get('addOnProductId').updateValueAndValidity();
      this.addProductForm.get('addOnQuantity').clearValidators();
      this.addProductForm.get('addOnQuantity').updateValueAndValidity();
      this.addProductForm.get('addOnPrice').clearValidators();
      this.addProductForm.get('addOnPrice').updateValueAndValidity();
    }
  }

  resetFormAndBack() {
    this.mainCategory = '';
    this.mainDivision = '';
    this.addProductForm.reset();
    this.location.back();
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
    this.productImages = this.files;
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
    this.productImages = this.files;
  }

}
