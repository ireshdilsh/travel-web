package com.example.demo.service.impl;

import com.example.demo.dto.AdminDto;
import com.example.demo.entity.AdminEntity;
import com.example.demo.repository.AdminRepository;
import com.example.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepository adminRepository;

    @Override
    public AdminEntity addAdmin(AdminDto adminDto) {
        AdminEntity adminEntity = new AdminEntity();

        adminEntity.setAdminID(adminDto.getAdminID());
        adminEntity.setAdminName(adminDto.getAdminName());
        adminEntity.setAdminEmail(adminDto.getAdminEmail());
        adminEntity.setAdminPassword(adminDto.getAdminPassword());

        return adminRepository.save(adminEntity);
    }

}
