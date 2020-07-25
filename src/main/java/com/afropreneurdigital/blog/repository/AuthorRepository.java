package com.afropreneurdigital.blog.repository;

import com.afropreneurdigital.blog.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
    @Query("select a from Author a where a.login = :login and a.password = :password")
    Optional<Author> findByLoginAndPassword(@Param("login") String login, @Param("password") String password);
}
