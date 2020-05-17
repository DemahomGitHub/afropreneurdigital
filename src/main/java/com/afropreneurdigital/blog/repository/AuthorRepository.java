package com.afropreneurdigital.blog.repository;

import com.afropreneurdigital.blog.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Long> {
}
