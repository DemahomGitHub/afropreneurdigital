package com.afropreneurdigital.blog.model;

import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Date;
import java.util.Set;

@Data
@Entity
@Table(name = "ARTICLE")
public class Article {
    @Id
    @Column(name = "ID", nullable = false, unique = true)
    private Long id;
    private String title;
    private String content;

    @ManyToOne
    @JoinColumn(name = "AUTHOR_ID")
    private Author author;
    private Date releaseDate;
    private Date deletedAt;

    @ManyToMany
    @JoinTable(
            name = "ARTICLE_ENTITY_COMP",
            joinColumns = @JoinColumn(name = "ARTICLE_ID"),
            inverseJoinColumns = @JoinColumn(name = "ENTITY_ID"))
    private Set<Entities> topics;

    public Article() {}
}
