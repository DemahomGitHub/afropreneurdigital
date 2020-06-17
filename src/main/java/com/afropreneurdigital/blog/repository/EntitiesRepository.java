package com.afropreneurdigital.blog.repository;

import com.afropreneurdigital.blog.model.Entities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntitiesRepository extends JpaRepository<Entities, Long> {}
