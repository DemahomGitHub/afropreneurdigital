package com.afropreneurdigital.blog.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
public class ArticlExtrnlRef {
    private @Id @GeneratedValue Long id;
    private String refTitle;
    private String refLink;
    private Long articleId;

    public ArticlExtrnlRef() {}
}
