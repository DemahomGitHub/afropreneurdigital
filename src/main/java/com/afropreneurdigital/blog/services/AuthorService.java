package com.afropreneurdigital.blog.services;

import com.afropreneurdigital.blog.errorshandling.AuthorNotFoundException;
import com.afropreneurdigital.blog.helper.AuthorHelper;
import com.afropreneurdigital.blog.model.Author;
import com.afropreneurdigital.blog.repository.AuthorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class AuthorService {
    private final AuthorRepository authorRepository;

    public AuthorService(AuthorRepository repository) {
        this.authorRepository = repository;
    }

    public List<Author> findAll() {
        return authorRepository
                .findAll()
                .stream()
                .peek(AuthorHelper::hideCriticalFields)
                .collect(Collectors.toList());
    }

    public Author findOne(Long id) throws AuthorNotFoundException {
        return authorRepository
                .findById(id)
                .orElseThrow(() -> new AuthorNotFoundException(id));
    }

    public Author findByLoginAndPassword(String login, String password) throws AuthorNotFoundException {
        return authorRepository
                .findByLoginAndPassword(login, password)
                .map(author -> {
                    AuthorHelper.hideCriticalFields(author);
                    return author;
                 })
                .orElseThrow(AuthorNotFoundException::new);
    }
}
