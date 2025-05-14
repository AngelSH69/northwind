package com.precticauno.spring.app1.springboot_aplication.repositories;

import com.precticauno.spring.app1.springboot_aplication.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
}
