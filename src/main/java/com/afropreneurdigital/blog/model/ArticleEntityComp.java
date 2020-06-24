package com.afropreneurdigital.blog.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "ARTICLE_ENTITY_COMP")
public class ArticleEntityComp {
    @Id
    @Column(name = "ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ARTICLE_ID")
    private Article article;

    @ManyToOne
    @JoinColumn(name = "ENTITY_ID")
    private Entities entity;

    public ArticleEntityComp() {}
}
