// import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
// import { DataService } from '../data.service';



// @Component({
//   selector: 'app-printbill',
//   templateUrl: './printbill.component.html',
//   styleUrls: ['./printbill.component.css']
// })
// export class PrintbillComponent implements OnInit {

//   // displayedColumns: string[] = ['Variety', 'Rate per KG', 'Bag Weight', 'Toatal Bags', 'Gross Weight', 'Per Bag cost', 'Net Weight', 'Gross Amount', 'Total Bags Cost', 'Net Amount'];
//   // columnsToDisplay: string[] = this.displayedColumns.slice();
//   // data: PeriodicElement[] = ELEMENT_DATA;

//   // addColumn() {
//   //   const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
//   //   this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
//   // }

//   // removeColumn() {
//   //   if (this.columnsToDisplay.length) {
//   //     this.columnsToDisplay.pop();
//   //   }
//   // }

//   // shuffle() {
//   //   let currentIndex = this.columnsToDisplay.length;
//   //   while (0 !== currentIndex) {
//   //     let randomIndex = Math.floor(Math.random() * currentIndex);
//   //     currentIndex -= 1;

//   //     // Swap
//   //     let temp = this.columnsToDisplay[currentIndex];
//   //     this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
//   //     this.columnsToDisplay[randomIndex] = temp;
//   //   }
//   // }

//   // rows: any[] = [];


//   // constructor(private dataService: DataService) {}

//   // ngOnInit(): void {
//   // }

//   // handleAddRow() {
//   //   this.rows.push({ variety: '', bagWeights: [], ratePerKG: 0, perBagCost: 0 });
//   // }

//   // handleRemoveRow(index: number) {
//   //   this.rows.splice(index, 1);
//   // }

//   // handleVarietyChange(index: number, event: any) {
//   //   this.rows[index].variety = event.target.value;
//   // }

//   // handleBagWeightChange(index: number, bagWeightIndex: number, event: any) {
//   //   this.rows[index].bagWeights[bagWeightIndex] = Number(event.target.value);
//   // }

//   // handleAddBagWeight(index: number) {
//   //   this.rows[index].bagWeights.push(0);
//   // }

//   // handleRemoveBagWeight(index: number, bagWeightIndex: number) {
//   //   this.rows[index].bagWeights.splice(bagWeightIndex, 1);
//   // }

//   // handleRateChange(index: number, event: any) {
//   //   this.rows[index].ratePerKG = Number(event.target.value);
//   // }

  
//   // // handlePerBagCostChange(index: number, event: any) {
//   // //   this.rows[index].perBagCost = Number(event.target.value);
//   // // }

//   // calculateTotalBags(bagWeights: number[]) {
//   //   return bagWeights.length;
//   // }

//   // calculateGrossWeight(bagWeights: number[]) {
//   //   return bagWeights.reduce((acc, curr) => acc + curr, 0);
//   // }

//   // calculateNetWeight(grossWeight: number, bagWeights: number[]) {
    // const bagsGreaterThan45 = bagWeights.filter((bagWeight) => bagWeight > 45);
    // const bagsGreaterThan50 = bagWeights.filter((bagWeight) => bagWeight > 50);
    // const netWeight =
    //   grossWeight -
    //   bagWeights.length -
    //   0.5 * bagsGreaterThan45.length -
    //   0.5 * bagsGreaterThan50.length;
    // return netWeight; 
//   // }

//   // calculateGrossAmount(netWeight: number, ratePerKG: number) {
//   //   return netWeight * ratePerKG; // Display with two decimal places
//   // }

//   // calculateNetAmount(grossAmount: number, totalBags: number, perBagCost: number) {
//   //   return Number(Number(grossAmount) + Number(perBagCost * totalBags)); // Display with two decimal places
//   // }

//   // calculateTotalBagsCost(totalBags: number, perBagCost: number) {
//   //   return Number(totalBags * perBagCost); // Display with two decimal places
//   // }


//   // calculateAndUpdateTotalBags(row: any) {
//   //   row.totalBags = this.calculateTotalBags(row.bagWeights);
//   // }

//   // // Calculate and update the row's gross weight
//   // calculateAndUpdateGrossWeight(row: any) {
//   //   row.grossWeight = this.calculateGrossWeight(row.bagWeights);
//   // }

//   // // Calculate and update the row's net weight
//   // calculateAndUpdateNetWeight(row: any) {
//   //   row.netWeight = this.calculateNetWeight(row.grossWeight, row.bagWeights);
//   // }

//   // // Calculate and update the row's gross amount
//   // calculateAndUpdateGrossAmount(row: any) {
//   //   row.grossAmount = this.calculateGrossAmount(row.netWeight, row.ratePerKG);
//   // }

//   // // Calculate and update the row's total bags cost
//   // calculateAndUpdateTotalBagsCost(row: any) {
//   //   row.totalBagsCost = this.calculateTotalBagsCost(row.totalBags, row.perBagCost);
//   // }

//   // // Calculate and update the row's net amount
//   // calculateAndUpdateNetAmount(row: any) {
//   //   row.netAmount = this.calculateNetAmount(row.grossAmount, row.totalBags, row.perBagCost);
//   // }

//   // // ... other methods ...

//   // // Whenever an input changes (e.g., bagWeights, ratePerKG, perBagCost), call the corresponding calculation and update method
//   // handleBagWeightChange(index: number, bagWeightIndex: number, event: any) {
//   //   this.calculateAndUpdateTotalBags(this.rows[index]);
//   //   this.calculateAndUpdateGrossWeight(this.rows[index]);
//   //   this.calculateAndUpdateNetWeight(this.rows[index]);
//   //   this.calculateAndUpdateGrossAmount(this.rows[index]);
//   //   this.calculateAndUpdateTotalBagsCost(this.rows[index]);
//   //   this.calculateAndUpdateNetAmount(this.rows[index]);
//   // }

//   // handleRateChange(index: number, event: any) {
//   //   this.calculateAndUpdateGrossAmount(this.rows[index]);
//   //   this.calculateAndUpdateTotalBagsCost(this.rows[index]);
//   //   this.calculateAndUpdateNetAmount(this.rows[index]);
//   // }

//   // handlePerBagCostChange(index: number, event: any) {
//   //   this.calculateAndUpdateTotalBagsCost(this.rows[index]);
//   //   this.calculateAndUpdateNetAmount(this.rows[index]);
//   // }


  
//   // onSubmit() {
//   //   console.log(this.rows);
//   //   this.dataService.getData(this.rows);
//   // }


//   rows: any[] = [];

//   constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

//   ngOnInit(): void {
//     }
  
    
//       handleAddRow() {
//         this.rows.push({ variety: '', bagWeights: [], ratePerKG: 0, perBagCost: 0 });
//       }
    
//       handleRemoveRow(index: number) {
//         this.rows.splice(index, 1);
//       }
    
//       handleVarietyChange(index: number, event: any) {
//         this.rows[index].variety = event.target.value;
//       }

    
//       handleAddBagWeight(index: number) {
//         this.rows[index].bagWeights.push(0);
//         this.calculateAndUpdateTotalBags(this.rows[index]);
//         this.calculateAndUpdateGrossWeight(this.rows[index]);
//         this.calculateAndUpdateNetWeight(this.rows[index]);
//         this.calculateAndUpdateGrossAmount(this.rows[index]);
//         this.calculateAndUpdateTotalBagsCost(this.rows[index]);
//         this.calculateAndUpdateNetAmount(this.rows[index]);
//         this.cdr.detectChanges();
//       }
      
    
//       handleRemoveBagWeight(index: number, bagWeightIndex: number) {
//         this.rows[index].bagWeights.splice(bagWeightIndex, 1);
//         // Recalculate and update Net Weight and Gross Amount
        
//         this.calculateAndUpdateTotalBags(this.rows[index]);
//         this.calculateAndUpdateGrossWeight(this.rows[index]);
//         this.calculateAndUpdateNetWeight(this.rows[index]);
//         this.calculateAndUpdateGrossAmount(this.rows[index]);
//         this.calculateAndUpdateTotalBagsCost(this.rows[index]);
//         this.calculateAndUpdateNetAmount(this.rows[index]);
//         this.cdr.detectChanges();
//       }
    
//       handleInputChange(index: number) {
//         this.calculateAndUpdateTotalBags(this.rows[index]);
//         this.calculateAndUpdateGrossWeight(this.rows[index]);
//         this.calculateAndUpdateNetWeight(this.rows[index]);
//         this.calculateAndUpdateGrossAmount(this.rows[index]);
//         this.calculateAndUpdateTotalBagsCost(this.rows[index]);
//         this.calculateAndUpdateNetAmount(this.rows[index]);
//         this.cdr.detectChanges();
//       }
    
//       calculateTotalBags(bagWeights: number[]) {
//         return bagWeights.length;
//       }
    
//       calculateGrossWeight(bagWeights: number[]) {
//         return bagWeights.reduce((acc, curr) => acc + curr, 0);
//       }
    
//       calculateNetWeight(grossWeight: number, bagWeights: number[]) {
//         const bagsGreaterThan45 = bagWeights.filter((bagWeight) => bagWeight > 45);
//         const bagsGreaterThan50 = bagWeights.filter((bagWeight) => bagWeight > 50);
//         const netWeight =
//           grossWeight -
//           bagWeights.length -
//           0.5 * bagsGreaterThan45.length -
//           0.5 * bagsGreaterThan50.length;
//         return netWeight;
//       }
    
//       calculateGrossAmount(netWeight: number, ratePerKG: number) {
//         return netWeight * ratePerKG;
//       }
    
//       calculateNetAmount(grossAmount: number, totalBags: number, perBagCost: number) {
//         return Number(Number(grossAmount) + Number(perBagCost * totalBags));
//       }
    
//       calculateTotalBagsCost(totalBags: number, perBagCost: number) {
//         return Number(totalBags * perBagCost);
//       }
    
//       calculateAndUpdateTotalBags(row: any) {
//         row.totalBags = this.calculateTotalBags(row.bagWeights);
//       }
    
//       calculateAndUpdateGrossWeight(row: any) {
//         row.grossWeight = this.calculateGrossWeight(row.bagWeights);
//       }
    
//       calculateAndUpdateNetWeight(row: any) {
//         row.netWeight = this.calculateNetWeight(row.grossWeight, row.bagWeights);
//       }
    
//       calculateAndUpdateGrossAmount(row: any) {
//         row.grossAmount = this.calculateGrossAmount(row.netWeight, row.ratePerKG);
//       }
    
//       calculateAndUpdateTotalBagsCost(row: any) {
//         row.totalBagsCost = this.calculateTotalBagsCost(row.totalBags, row.perBagCost);
//       }
    
//       calculateAndUpdateNetAmount(row: any) {
//         row.netAmount = this.calculateNetAmount(row.grossAmount, row.totalBags, row.perBagCost);
//       }
    
//       onSubmit() {
//         console.log(this.rows);
//         this.dataService.getData(this.rows);
//       }
//     }
    


import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-printbill',
    templateUrl: './printbill.component.html',
    styleUrls: ['./printbill.component.css']
  })
  export class PrintbillComponent  implements OnInit{
  rows: any[] = [];
  validationForm: FormGroup = new FormGroup({});


  constructor(private router: Router, private dataService: DataService, private cdr: ChangeDetectorRef, private fb: FormBuilder) {}

    ngOnInit(): void {
      this.validationForm = this.fb.group({
        name: ['', Validators.required],
        phoneNumber: ['', [Validators.required, this.validatePhoneNumber]],
        village: ['', Validators.required]
      });
    }

    get safeValidationForm(): FormGroup {
      return this.validationForm || new FormGroup({});
    }

    validatePhoneNumber(control: AbstractControl): ValidationErrors | null {
      const phoneNumberPattern = /^[0-9]{10}$/;
      if (control.value && !phoneNumberPattern.test(control.value)) {
        return { invalidPhoneNumber: true };
      }
      return null;
    }
    

  handleAddRow() {
    this.rows.push({ variety: '', bagWeights: [], ratePerKG: 0, perBagCost: 0 });
  }

  handleRemoveRow(index: number) {
    this.rows.splice(index, 1);
  }

  calculateTotalBags(bagWeights: number[]) {
    return bagWeights.length -1;
  }

  calculateGrossWeight(bagWeights: number[]) {
    return bagWeights.reduce((acc, curr) => acc + curr, 0);
  }

  calculateNetWeight(grossWeight: number, bagWeights: number[]): number {
    const bagsGreaterThan45 = bagWeights.filter((bagWeight) => bagWeight > 45);
    const bagsGreaterThan50 = bagWeights.filter((bagWeight) => bagWeight > 50);
    const netWeight =
      grossWeight -
      bagWeights.length -
      0.5 * bagsGreaterThan45.length -
      0.5 * bagsGreaterThan50.length;
    return Number((netWeight + 1).toFixed(2)); // Display with two decimal places
  }

  calculateGrossAmount(netWeight: number, ratePerKG: number) {
    return netWeight * ratePerKG;
  }

  calculateTotalBagsCost(totalBags: number, perBagCost: number) {
    return totalBags * perBagCost;
  }

  calculateNetAmount(grossAmount: number, totalBags: number, perBagCost: number) {
    return grossAmount + totalBags * perBagCost;
  }

  handleAddBagWeight(row: any) {
    row.bagWeights.push(0);

    this.updateCalculations(row);
    console.log(row.netWeight);
  }

  handleRemoveBagWeight(row: any, bagWeightIndex: number) {
    row.bagWeights.splice(bagWeightIndex, 1);
    this.updateCalculations(row);
  }

  handleInputChange(index: number) {
    this.updateCalculations(this.rows[index]);
  }

  handleRateChange(index: number) {
    this.updateCalculations(this.rows[index]);
  }

  handlePerBagCostChange(index: number) {
    this.updateCalculations(this.rows[index]);
  }

  updateCalculations(row: any) {
    row.totalBags = this.calculateTotalBags(row.bagWeights);
    row.grossWeight = this.calculateGrossWeight(row.bagWeights);
    row.netWeight = this.calculateNetWeight(row.grossWeight, row.bagWeights);
    row.grossAmount = this.calculateGrossAmount(row.netWeight, row.ratePerKG);
    row.totalBagsCost = this.calculateTotalBagsCost(row.totalBags, row.perBagCost);
    row.netAmount = this.calculateNetAmount(row.grossAmount, row.totalBags, row.perBagCost);
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  submitFormData(): void {
    if (this.validationForm.valid) {
      const formData = this.validationForm.value;
      // Send the form data to the service using an event emitter
      this.dataService.formDataEmitter.emit(formData);
    } else {
      // Handle form validation errors or display a message
    }
  }

  onSubmit() {
    console.log(this.rows);
    this.dataService.getData(this.rows);
    this.submitFormData();
    this.router.navigate(['/bill'])
  }
}
