package com.precticauno.spring.app1.springboot_aplication.controllers;

import com.precticauno.spring.app1.springboot_aplication.models.Employee;
import com.precticauno.spring.app1.springboot_aplication.models.dto.EmployeeUpdateDTO;
import com.precticauno.spring.app1.springboot_aplication.servicios.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Short id) {
        Optional<Employee> employee = employeeService.getEmployeeById(id);
        return employee.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        Employee savedEmployee = employeeService.saveEmployee(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedEmployee);
    }

    @PutMapping("/{id}")
public ResponseEntity<Employee> updateEmployee(@PathVariable Short id, @RequestBody EmployeeUpdateDTO dto) {
    Optional<Employee> existingEmployee = employeeService.getEmployeeById(id);

    if (existingEmployee.isPresent()) {
        Employee employee = existingEmployee.get();

        // Solo se actualizan los campos que vienen en el DTO
        if (dto.getFirstName() != null) employee.setFirstName(dto.getFirstName());
        if (dto.getTitle() != null) employee.setTitle(dto.getTitle());

        Employee updatedEmployee = employeeService.saveEmployee(employee);
        return ResponseEntity.ok(updatedEmployee);
    } else {
        return ResponseEntity.notFound().build();
    }
}


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Short id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }
}
