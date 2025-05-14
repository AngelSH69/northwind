package com.precticauno.spring.app1.springboot_aplication.controllers;


import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.precticauno.spring.app1.springboot_aplication.models.Empleados;



@Controller
public class PracticaController {

    @GetMapping("/detalles_info")

    
    public String info(Model model){
            Empleados empleado1 = new Empleados("Juan","Rodriguez","Calle 1mo. 361",null,
                                                35,23442,001);
        model.addAttribute("Empleado", empleado1);
        
        return "detalles_info";
    }
    @ModelAttribute("Empleados")
    public List<Empleados>ListaEmpleados(){
        return Arrays.asList(
            new Empleados("Maria", "Suarez", "Calle segunda no 1",
             "Secretaria", 34, 4753664, 002),
          new Empleados("Juan", "Rodriguez", "Calle primera no.1", "Gerente", 35, 123456789, 01),
          new Empleados("Luis", "Martínez", "Calle tercera no.3", "Contador", 28, 987654321, 03),
          new Empleados("Ana", "González", "Avenida central no.4", "Diseñadora", 30, 456789123, 04),
          new Empleados("Pedro", "Sánchez", "Boulevard no.5", "Analista", 25, 789123456, 05)
        );

    }

}
