package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AdminDto {
    private Long adminID;
    private String adminName;
    private String adminEmail;
    private String adminPassword;
}
