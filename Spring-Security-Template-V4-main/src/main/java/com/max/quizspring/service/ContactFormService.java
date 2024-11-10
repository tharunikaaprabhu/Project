package com.max.quizspring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.quizspring.model.ContactForm;
import com.max.quizspring.model.User;
import com.max.quizspring.repo.ContactFormRepository;
import com.max.quizspring.repo.UserRepo;

@Service
public class ContactFormService {

    @Autowired
    private ContactFormRepository repository;

    @Autowired
    private UserRepo urepo;

    public String saveContactForm(ContactForm form) {
        User refuser = urepo.findById(form.getUser().getUid()).orElse(null);
        if (refuser == null) {
            return "error!";
        } else {
            form.setUser(refuser);
            repository.save(form);
            return "Conttact add";
        }
    }

    public List<ContactForm> getContactinfo() {

        return repository.findAll();
    }
}
