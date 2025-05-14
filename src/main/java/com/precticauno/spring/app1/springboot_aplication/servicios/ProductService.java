package com.precticauno.spring.app1.springboot_aplication.servicios;

import com.precticauno.spring.app1.springboot_aplication.models.Product;
import com.precticauno.spring.app1.springboot_aplication.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository; 

    // Método para obtener todos los productos
    public List<Product> getAllProducts() {
        return productRepository.findAll(); 
    }

    // Método para obtener un producto por ID
    public Optional<Product> getProductById(Integer id) {
        return productRepository.findById(id); 
    }

    // Método para guardar un nuevo producto
    public Product saveProduct(Product product) {
        return productRepository.save(product); 
    }

    // Método para eliminar un producto
    public void deleteProduct(Integer id) {
        productRepository.deleteById(id); 
    }
}
