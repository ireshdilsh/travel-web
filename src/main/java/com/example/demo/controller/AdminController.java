package com.example.demo.controller;

import com.example.demo.dto.AdminDto;
import com.example.demo.entity.AdminEntity;
import com.example.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    AdminService adminService;

    @PostMapping("/literary/haven/add/new/admin")
    public AdminEntity addAdmin(@RequestBody AdminDto adminDto) {
        return adminService.addAdmin(adminDto);
    }

}
