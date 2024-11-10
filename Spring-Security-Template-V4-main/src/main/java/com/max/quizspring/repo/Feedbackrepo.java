package com.max.quizspring.repo;

import com.max.quizspring.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Feedbackrepo extends JpaRepository<Feedback, Long> {
}