package com.afropreneurdigital.blog.repository;

import com.afropreneurdigital.blog.model.ArticleEntityComp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleEntityCompRepository extends JpaRepository<ArticleEntityComp, Long> {}
