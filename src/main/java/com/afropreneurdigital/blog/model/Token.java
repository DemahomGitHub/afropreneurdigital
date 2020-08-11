package com.afropreneurdigital.blog.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "TOKEN")
public class Token {
    @Id
    private String id;
    private LocalDateTime expirationDate;

    @ManyToOne
    @JoinColumn(name = "AUTHOR_ID")
    private Author author;
}
