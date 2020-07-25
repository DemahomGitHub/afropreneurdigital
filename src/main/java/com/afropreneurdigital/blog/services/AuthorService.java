package com.afropreneurdigital.blog.services;

import com.afropreneurdigital.blog.errorshandling.AuthorNotFoundException;
import com.afropreneurdigital.blog.model.Author;
import com.afropreneurdigital.blog.repository.AuthorRepository;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {
    private final AuthorRepository authorRepository;

    public AuthorService(AuthorRepository repository) {
        this.authorRepository = repository;
    }

    public List<Author> findAll() {
        return authorRepository.findAll();
    }

    public Author findOne(Long id) throws AuthorNotFoundException {
        return authorRepository
                .findById(id)
                .orElseThrow(() -> new AuthorNotFoundException(id));
    }

    public Author findByLoginAndPassword(String login, String password) throws AuthorNotFoundException {
        return authorRepository.findByLoginAndPassword(login, password).orElseThrow(AuthorNotFoundException::new);
    }
}
