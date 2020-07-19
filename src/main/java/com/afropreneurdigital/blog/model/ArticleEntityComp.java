package com.afropreneurdigital.blog.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "ARTICLE_ENTITY_COMP")
public class ArticleEntityComp {
    @Id
    private Long id;

    /*
    @ManyToOne
    @JoinColumn(name = "ARTICLE_ID")
    private Article article;

    @ManyToOne
    @JoinColumn(name = "ENTITY_ID")
    private Entities entity; */

    @Column(name = "ARTICLE_ID")
    private Long articleId;
    @Column(name = "ENTITY_ID")
    private Long entityId;

    public ArticleEntityComp() {}
}
