package com.afropreneurdigital.blog.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity(name = "AUTHOR")
public class Author {
    private @Id Long authorOid;
    private String fullName;
    private String login;
    private String description;

    public Author() {}
    public Author (String fullName, String login, String description) {
        this.fullName = fullName;
        this.login = login;
        this.description = description;
    }

    public Author (Long id, String fullName, String login, String description) {
        this.authorOid = id;
        this.fullName = fullName;
        this.login = login;
        this.description = description;
    }

    public Author (String fullName) {
        this.fullName = fullName;
    }
}
