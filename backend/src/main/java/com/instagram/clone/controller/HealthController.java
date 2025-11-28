package com.instagram.clone.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/")
    public String home() {
        return "Instagram Clone Backend Running";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}
