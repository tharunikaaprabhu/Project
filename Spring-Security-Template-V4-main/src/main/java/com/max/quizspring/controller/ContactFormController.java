package com.max.quizspring.controller;


import com.max.quizspring.model.ContactForm;
import com.max.quizspring.service.ContactFormService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/contact")

public class ContactFormController {

    @Autowired
    private ContactFormService service;

    @PostMapping("/submit")
    public String submitContactForm(@RequestBody ContactForm form) {
        return service.saveContactForm(form);
    }
    @GetMapping("/getContactinfo")
    public List<ContactForm> getContactinfo() {
        return service.getContactinfo();
    }
    
}
