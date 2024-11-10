package com.max.quizspring.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.max.quizspring.model.ContactForm;

@Repository
public interface ContactFormRepository extends JpaRepository<ContactForm, Long> {
    
}