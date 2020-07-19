package com.afropreneurdigital.blog.controller;

import com.afropreneurdigital.blog.model.Article;
import com.afropreneurdigital.blog.services.ArticleServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class ArticleController {
    private final ArticleServices articleServices;

    public ArticleController(ArticleServices services){
        this.articleServices = services;
    }

    @GetMapping("/articles")
    List<Article> findAll() {
        return this.articleServices.findAll();
    }

    @PostMapping("/articles")
    Article newArticle(@RequestBody Article newArticle) {
        return articleServices.newArticle(newArticle);
    }

    @PutMapping("/articles/{id}")
    Article updateArticle(@RequestBody Article newArticle, @PathVariable Long id) {
        return this.articleServices.updateArticle(newArticle, id);
    }
}
