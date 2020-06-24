package com.afropreneurdigital.blog.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity(name = "AUTHOR")
public class Author {
    @Id
    @Column(name = "ID", nullable = false, unique = true)
    private Long id;

    @Column(name = "FULL_NAME")
    private String fullName;

    @Column(name = "LOGIN")
    private String login;

    @Column(name = "DESCRIPTION")
    private String description;

    public Author() {}
}
