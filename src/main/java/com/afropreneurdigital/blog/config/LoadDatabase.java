package com.afropreneurdigital.blog.config;

import com.afropreneurdigital.blog.model.Article;
import com.afropreneurdigital.blog.model.Author;
import com.afropreneurdigital.blog.repository.ArticleRepository;
import com.afropreneurdigital.blog.repository.AuthorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
public class LoadDatabase {
    Author author;
    Article article;
    @Bean
    CommandLineRunner createNewAuthor(AuthorRepository repository) {
        author = new Author("Mohamed Toure", "contact@afropreneudigital.com", "The most popular blogger in the world");
        return args -> {
            log.info("Preloading " + repository.save(author));
        };
    }

    @Bean
    CommandLineRunner createNewArticle(ArticleRepository repository) {
        article = new Article("Travailler dure c'est bien", "Moi je suis un gros fainéant", author.getId());
        return args -> {
            log.info("Preloading " + repository.save(article));
        };
    }
}
