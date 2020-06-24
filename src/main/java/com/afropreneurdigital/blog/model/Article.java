package com.afropreneurdigital.blog.model;

import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Date;
import java.util.Set;

@Data
@Entity(name = "ARTICLE")
public class Article {
    @Id
    @Column(name = "ID", nullable = false, unique = true)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "CONTENT")
    private String content;

    @ManyToOne
    @JoinColumn(name = "AUTHOR_ID")
    private Author author;

    @Column(name = "RELEASE_DATE")
    private Date releaseDate;

    @Column(name = "DELETED_AT")
    private Date deletedAt;

    public Article() {}
}
