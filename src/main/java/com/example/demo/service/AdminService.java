package com.example.demo.service;

import com.example.demo.dto.AdminDto;
import com.example.demo.entity.AdminEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AdminService {
    AdminEntity addAdmin(AdminDto adminDto);

    List<AdminEntity> getAllAdmins();
}
