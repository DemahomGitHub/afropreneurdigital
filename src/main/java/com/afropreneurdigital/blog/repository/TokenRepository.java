package com.afropreneurdigital.blog.repository;

import com.afropreneurdigital.blog.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface TokenRepository extends JpaRepository<Token, String> {
    @Query("select tok from Token tok where tok.expirationDate >= :expDate and tok.author.id = :authorId")
    Optional<Token> findByExpirationDateAndAuthorID(@Param("expDate") LocalDateTime expDate, @Param("authorId") Long authorId);
}
