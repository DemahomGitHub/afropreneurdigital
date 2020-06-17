package com.afropreneurdigital.blog.controller;

import com.afropreneurdigital.blog.model.Article;
import com.afropreneurdigital.blog.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class ArticleController {
    private final ArticleRepository repository;

    ArticleController(ArticleRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/articles")
    List<Article> findAll() {
        System.out.println(this.repository.findAll());
        return this.repository.findAll();
    }
}
