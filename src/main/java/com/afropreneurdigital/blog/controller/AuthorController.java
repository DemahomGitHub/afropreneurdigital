package com.afropreneurdigital.blog.controller;

import com.afropreneurdigital.blog.model.Author;
import com.afropreneurdigital.blog.services.AuthorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@Slf4j
public class AuthorController {
    private final AuthorService authorService;

    AuthorController(AuthorService service) {
        this.authorService = service;
    }

    @GetMapping("/authors")
    List<Author> findAll() {
        return authorService.findAll();
    }

    @GetMapping("/authors/{id}")
    Author findOne(@PathVariable Long id) {
        try {
            return authorService.findOne(id);
        } catch (Exception ex) {
            log.info("Author not found");
        }
        return null;
    }
}
