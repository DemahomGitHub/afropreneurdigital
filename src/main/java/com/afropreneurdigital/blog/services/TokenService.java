package com.afropreneurdigital.blog.services;

import com.afropreneurdigital.blog.helper.DateHelper;
import com.afropreneurdigital.blog.model.Author;
import com.afropreneurdigital.blog.model.Token;
import com.afropreneurdigital.blog.repository.TokenRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Slf4j
@Service
public class TokenService {
    private final TokenRepository repository;

    public TokenService(TokenRepository repository) {
        this.repository = repository;
    }

    public Token generateTokenFor(Author author) {
        DateHelper helper = new DateHelper();
        LocalDateTime expDate = helper.getDateXDaysFromCurrentDate(1);
        Token token;
        log.info("Finding token for author " + author.getId());
        token = this.repository
                .findByExpirationDateAndAuthorID(expDate, author.getId())
                .orElseGet(() -> {
                    log.info("No valid token found. Generating new token ...");
                    String id = UUID.randomUUID().toString().replaceAll("-", "");
                    Token newToken = new Token();
                    newToken.setAuthor(author);
                    newToken.setId(id);
                    newToken.setExpirationDate(expDate);
                    log.info("Token generated: " + id);
                    return this.repository.save(newToken);
                });
        return token;
    }

}
