package com.afropreneurdigital.blog.repository;

import com.afropreneurdigital.blog.model.ArticlExtrnlRef;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleExternalReferenceRepository extends JpaRepository<ArticlExtrnlRef, Long>  {
}
