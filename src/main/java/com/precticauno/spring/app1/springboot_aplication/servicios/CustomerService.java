package com.precticauno.spring.app1.springboot_aplication.servicios;

import com.precticauno.spring.app1.springboot_aplication.models.Customer;
import com.precticauno.spring.app1.springboot_aplication.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository; 
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll(); 
        }

    
    public Optional<Customer> getCustomerById(String id) {
        return customerRepository.findById(id);
    }

    
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer); 
    }

    // Método para eliminar un cliente
    public void deleteCustomer(String id) {
        customerRepository.deleteById(id);
    }
}
