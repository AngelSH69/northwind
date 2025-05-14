package com.precticauno.spring.app1.springboot_aplication.controllers;


//import java.util.HashMap;
//import java.util.Map;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.precticauno.spring.app1.springboot_aplication.models.Empleados;
import com.precticauno.spring.app1.springboot_aplication.models.dto.ClaseDto;




@RestController
@RequestMapping("/api")
public class EjemploRestController {

    @GetMapping(path = "/detalles_info2")

    
    public ClaseDto detalles_info2(){
            /*Empleados empleado1 = new Empleados("Juan","Rodriguez","Calle 1mo. 361","Gerente",
                                                35,23442,001);

        Map<String, Object> respuesta = new HashMap<>();
        respuesta.put("Empleado", empleado1);

        */
        ClaseDto usuario1= new ClaseDto();
        usuario1.setTitulo("Administrador");
        usuario1.setUsuario("Angel");
        return usuario1;
    }

}
