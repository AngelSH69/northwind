package com.precticauno.spring.app1.springboot_aplication.models.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class EmployeeUpdateDTO {
    private String firstName;
    private String title;
    
    @JsonIgnoreProperties(ignoreUnknown = true)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
