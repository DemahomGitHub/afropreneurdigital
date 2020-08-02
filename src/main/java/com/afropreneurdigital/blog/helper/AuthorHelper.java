package com.afropreneurdigital.blog.helper;

import com.afropreneurdigital.blog.model.Author;

public class AuthorHelper {
    public static Author hideCriticalFields(Author author) {
        author.setPassword(author.getPassword().replaceAll("[A-Za-z 0-9]", "*"));
        author.setLogin(author.getLogin().replaceAll("[A-Za-z 0-9]", "*"));
        author.setDescription(author.getDescription().replaceAll("[A-Za-z 0-9]", "*"));
        return author;
    }
}
