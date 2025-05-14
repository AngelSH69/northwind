import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

interface CustomerInterface {
  customerId: String, 
companyName: String, 
contactName: String, 
contactTitle: String, 
address: String, 
city: String, 
country: String, 
phone: String 
}

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  customers: CustomerInterface[] = []; // Array para almacenar los datos de los clientes

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (data) => {
        if(data){

          this.customers = data;  // Asignamos los datos recibidos a la variable customers
        } else {
          this.customers = [];
        }
        console.log(data);
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}
