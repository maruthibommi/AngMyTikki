import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  formDataEmitter: EventEmitter<any> = new EventEmitter<any>();
  rows: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  getData(data :any[]){
    this.rows.emit(data);
  }

  emitFormData(formData: any) {
    // You can perform additional processing here if needed
    // Then emit the form data
    this.formDataEmitter.emit(formData);
  }
  
}
