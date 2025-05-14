package com.precticauno.spring.app1.springboot_aplication.servicios;

import com.precticauno.spring.app1.springboot_aplication.models.Employee;
import com.precticauno.spring.app1.springboot_aplication.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Short id) {
        return employeeRepository.findById(id);
    }

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Short id) {
        employeeRepository.deleteById(id);
    }
}
