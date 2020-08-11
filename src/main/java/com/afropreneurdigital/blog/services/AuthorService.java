package com.afropreneurdigital.blog.services;

import com.afropreneurdigital.blog.errorshandling.AuthorNotFoundException;
import com.afropreneurdigital.blog.helper.AuthorHelper;
import com.afropreneurdigital.blog.model.Author;
import com.afropreneurdigital.blog.model.Token;
import com.afropreneurdigital.blog.repository.AuthorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class AuthorService {
    private final AuthorRepository authorRepository;
    private final TokenService tokenService;

    public AuthorService(AuthorRepository authorRepository, TokenService tokenService) {
        this.authorRepository = authorRepository;
        this.tokenService = tokenService;
    }

    public List<Author> findAll() {
        return authorRepository
                .findAll()
                .stream()
                .peek(AuthorHelper::hideCriticalFields)
                .collect(Collectors.toList());
    }

    public Author findOne(Long id) throws AuthorNotFoundException {
        return authorRepository.findById(id).orElseThrow(() -> new AuthorNotFoundException(id));
    }

    public Token findByLoginAndPassword(String login, String password) throws AuthorNotFoundException {
        Author author;
        log.info("Finding author for login = "+login+" and password="+password);
        author = this.authorRepository
                .findByLoginAndPassword(login, password)
                .map(AuthorHelper::hideCriticalFields)
                .orElseThrow(AuthorNotFoundException::new);
        log.info("Author found: " + author.getId());
        return tokenService.generateTokenFor(author);
    }
}
