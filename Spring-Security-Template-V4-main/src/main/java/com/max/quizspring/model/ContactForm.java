// package com.max.quizspring.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;

// @Entity
// public class ContactForm {
    
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String username;
//     public String getUsername() {
//         return username;
//     }

//     public void setUsername(String username) {
//         this.username = username;
//     }

//     private String email;
//     private String eventName;
//     private String eventDetails;

//     public ContactForm(Long id, String username, String email, String eventName, String eventDetails) {
//         this.id = id;
//         this.username = username;
//         this.email = email;
//         this.eventName = eventName;
//         this.eventDetails = eventDetails;
//     }

//     public ContactForm() {
//     }

//     // Getters and Setters
//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

   

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getEventName() {
//         return eventName;
//     }

//     public void setEventName(String eventName) {
//         this.eventName = eventName;
//     }

//     public String getEventDetails() {
//         return eventDetails;
//     }

//     public void setEventDetails(String eventDetails) {
//         this.eventDetails = eventDetails;
//     }



// }
package com.max.quizspring.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class ContactForm {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String eventName;
    private String eventDetails;

    
    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;

    public ContactForm(Long id, String username, String email, String eventName, String eventDetails) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.eventName = eventName;
        this.eventDetails = eventDetails;
    }

    public ContactForm() {
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventDetails() {
        return eventDetails;
    }

    public void setEventDetails(String eventDetails) {
        this.eventDetails = eventDetails;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
