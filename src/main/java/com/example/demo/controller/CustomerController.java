package com.example.demo.controller;

import com.example.demo.dto.CustomerDto;
import com.example.demo.entity.CustomerEntity;
import com.example.demo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "*")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping("/create/account/customer")
    public CustomerEntity customerPostMethod(@RequestBody CustomerDto customerDto) {
        return customerService.customerPostMethod(customerDto);
    }
    
    
}
