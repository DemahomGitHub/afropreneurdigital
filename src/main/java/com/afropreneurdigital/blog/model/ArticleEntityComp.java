package com.afropreneurdigital.blog.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity(name = "ARTICLE_ENTITY_COMP")
public class ArticleEntityComp {
    @Id
    private Long articleOid;
    private Long entityOid;

    public ArticleEntityComp() {}
}
