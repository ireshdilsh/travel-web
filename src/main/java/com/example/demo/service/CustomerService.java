package com.example.demo.service;

import com.example.demo.dto.CustomerDto;
import com.example.demo.entity.CustomerEntity;
import org.springframework.stereotype.Service;

@Service
public interface CustomerService {

    CustomerEntity customerPostMethod(CustomerDto customerDto);
   
}
