package com.afropreneurdigital.blog.services;

import com.afropreneurdigital.blog.model.Author;
import com.afropreneurdigital.blog.repository.AuthorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService {
    private final AuthorRepository repository;

    public AuthorService(AuthorRepository repository) {
        this.repository = repository;
    }

    public List<Author> findAll() {
        return repository.findAll();
    }

    public Author findOne(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("AUTHOR_NOT_FOUND_EXCEPTION"));
    }
}
