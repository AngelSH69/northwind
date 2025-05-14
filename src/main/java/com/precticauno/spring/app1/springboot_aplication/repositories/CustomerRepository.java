package com.precticauno.spring.app1.springboot_aplication.repositories;

import com.precticauno.spring.app1.springboot_aplication.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
}
