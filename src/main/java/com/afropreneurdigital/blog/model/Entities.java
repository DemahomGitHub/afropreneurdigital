package com.afropreneurdigital.blog.model;

import jdk.jfr.Name;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Data
@Entity(name = "ENTITIES")
public class Entities {
    @Id
    private Long entityOid;
    private String group;
    private String key;
    private String value;

    public Entities() {}
}
