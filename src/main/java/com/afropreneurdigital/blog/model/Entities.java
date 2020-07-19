package com.afropreneurdigital.blog.model;

import jdk.jfr.Name;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.Set;


@Data
@Entity
@Table(name = "ENTITIES")
public class Entities {
    @Id
    private Long id;
    private String group;
    private String key;
    private String value;

    public Entities() {}
}
