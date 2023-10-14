import { Component, OnInit, OnChanges, SimpleChange, Input} from '@angular/core';
import { DataService } from '../data.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit{
  rows:any [] = [];
  totalBag: number = 0;
  totalAmount: number = 0;
  myForm!: FormGroup ;
  dataRows!: FormArray;
  recievedFormData: any;
  constructor(private dataService:DataService, private fb:FormBuilder){
    this.dataService.formDataEmitter.subscribe((formData)=>{
      this.recievedFormData=formData;
      console.log(this.recievedFormData);
    })
  }
  ngOnInit(): void{
    this.dataService.rows.subscribe(res=>{
      console.log(res);
      this.rows = res;

      this.calculateTotalBags();
      this.calculateTotalAmount();
    })
    
    this.myForm = this.fb.group({
      dataRows: this.fb.array([]),
    });
    this.addRow();
  }

  calculateTotalBags(): void {
    this.totalBag = this.rows.reduce(
      (accumulator, currentRow) => accumulator + currentRow.totalBags,
      0
    );
  }

  calculateTotalAmount(): void{
    this.totalAmount = this.rows.reduce(
      (accumulator, currentRow) => accumulator + currentRow.netAmount, 0
    );
  }

  addRow(): void{
    this.dataRows = this.myForm.get('dataRows') as FormArray;
    this.dataRows.push(this.createDataRow());
  }

  createDataRow(): FormGroup{
    return this.fb.group({
      deductionType: [''],
      perBag: [false],
      deductionAmount: [],
      totalBags: []
    })
  }
  // handleAddRow() {
  //   this.deductions.push({ deductionType: '', perBag: false, deductionAmount: 0, totalBags: 0});
  // }

  calculateTotalDeductionAmount(row: FormGroup): number {
    const perBag = row.get('perBag')?.value;
    const deductionAmount = row.get('deductionAmount')?.value;

    if (perBag) {
      return this.totalBag * deductionAmount;
    } else {
      return deductionAmount;
    }
  }

  getRowFormGroup(index: number): FormGroup {
    return this.dataRows.at(index) as FormGroup;
  }

  removeRow(index: number): void{
    this.dataRows = this.myForm.get('dataRows') as FormArray;
    this.dataRows.removeAt(index);
    const formData = this.myForm.value;
    console.log('Form Data:', formData);
  }

  onSubmit(): void{
    const formData = this.myForm.value;
    console.log('Form Data:', formData);
  }
}