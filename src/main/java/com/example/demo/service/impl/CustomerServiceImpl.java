package com.example.demo.service.impl;

import com.example.demo.dto.CustomerDto;
import com.example.demo.entity.CustomerEntity;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public CustomerEntity customerPostMethod(CustomerDto customerDto) {
       CustomerEntity customerEntity = new CustomerEntity();

       customerEntity.setId(customerDto.getId());
       customerEntity.setName(customerDto.getName());
       customerEntity.setEmail(customerDto.getEmail());
       customerEntity.setPassword(customerDto.getPassword());

       return customerRepository.save(customerEntity);
    }

   
}
