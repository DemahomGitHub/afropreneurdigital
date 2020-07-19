package com.afropreneurdigital.blog.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="AUTHOR")
public class Author {
    @Id
    private Long id;
    private String fullName;
    private String login;
    private String password;
    private String description;

    public Author() {}
}
