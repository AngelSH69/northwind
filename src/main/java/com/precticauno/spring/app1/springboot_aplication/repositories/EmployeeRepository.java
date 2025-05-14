package com.precticauno.spring.app1.springboot_aplication.repositories;

import com.precticauno.spring.app1.springboot_aplication.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Short> {
}
