package com.afropreneurdigital.blog.repository;

import com.afropreneurdigital.blog.model.Article;
import com.afropreneurdigital.blog.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
}
