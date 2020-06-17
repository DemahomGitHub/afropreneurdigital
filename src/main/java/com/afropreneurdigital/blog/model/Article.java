package com.afropreneurdigital.blog.model;

import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Date;

@Data
@Entity(name = "ARTICLE")
public class Article {
    @Id
    @Column(name = "ARTICLE_OID", nullable = false, unique = true)
    private Long articleOid;

    @Column(name = "TITLE", nullable = true, unique = false)
    private String title;

    @Column(name = "CONTENT", nullable = true, unique = false)
    private String content;

    @Column(name = "AUTHOR_ID", nullable = true, unique = false)
    private Long authorId;

    @Column(name = "RELEASE_DATE", nullable = true, unique = false)
    private Date releaseDate;

    @Column(name = "DELETED_AT", nullable = true, unique = false)
    private Date deletedAt;

    public Article() {}
}
