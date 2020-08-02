package com.afropreneurdigital.blog.services;

import com.afropreneurdigital.blog.helper.AuthorHelper;
import com.afropreneurdigital.blog.model.Article;
import com.afropreneurdigital.blog.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleServices {
    private final ArticleRepository articleRepository;
    public ArticleServices(ArticleRepository repository) {
        this.articleRepository = repository;
    }
    public List<Article> findAll() {
        return this.articleRepository
                .findAll()
                .stream()
                .peek(article -> {
                    article.setAuthor(AuthorHelper.hideCriticalFields(article.getAuthor()));
                })
                .collect(Collectors.toList());
    }
    public Article newArticle(Article newArticle) {
        return this.articleRepository.save(newArticle);
    }
    public Article updateArticle(Article newArticle, Long id) {
        return this.articleRepository
                .findById(id)
                .map(article -> {
                    article.setAuthor(newArticle.getAuthor());
                    article.setContent(newArticle.getContent());
                    article.setReleaseDate(newArticle.getReleaseDate());
                    article.setTitle(newArticle.getTitle());
                    article.setDeletedAt(newArticle.getDeletedAt());
                    return articleRepository.save(newArticle);
                })
                .orElseGet(() -> {
                    newArticle.setId(id);
                    return articleRepository.save(newArticle);
                });
    }
}
