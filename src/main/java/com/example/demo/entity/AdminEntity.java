package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "admin")
public class AdminEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminID;
    @Column(nullable = false)
    private String adminName;
    @Column(unique = true, nullable = false)
    private String adminEmail;
    @Column(nullable = false)
    private String adminPassword;
}
