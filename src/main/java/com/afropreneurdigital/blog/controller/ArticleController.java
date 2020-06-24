package com.afropreneurdigital.blog.controller;

import com.afropreneurdigital.blog.model.Article;
import com.afropreneurdigital.blog.model.ArticleEntityComp;
import com.afropreneurdigital.blog.repository.ArticleEntityCompRepository;
import com.afropreneurdigital.blog.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class ArticleController {
    private final ArticleEntityCompRepository repository;

    ArticleController(ArticleEntityCompRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/articles")
    List<ArticleEntityComp> findAll() {
        return this.repository.findAll();
    }
}
