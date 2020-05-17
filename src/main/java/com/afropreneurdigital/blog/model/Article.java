package com.afropreneurdigital.blog.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Date;

@Entity
@Data
public class Article {
    private @Id @GeneratedValue Long id;
    private String title;
    private String articleContent;
    private Long authorId;
    private Date releaseDt;
    private Date deletedAt;

    public Article() {}
    public Article(String title, String articleContent, Long authorId){
        this.title = title;
        this.articleContent = articleContent;
        this.authorId = authorId;
    }

}
