package com.afropreneurdigital.blog.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
@Data
public class Author {
    private @Id @GeneratedValue Long id;
    private String fullName;
    private String email;
    private String description;

    public Author() {}
    public Author (String fullName, String email, String description) {
        this.fullName = fullName;
        this.email = email;
        this.description = description;
    }

    public Author (Long id, String fullName, String email, String description) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.description = description;
    }

    public Author (String fullName) {
        this.fullName = fullName;
    }
}
