package com.afropreneurdigital.blog.errorshandling;

public class AuthorNotFoundException extends RuntimeException {
    public AuthorNotFoundException() {
        super("Login ou mot de passe incorrecte");
    }
    public AuthorNotFoundException(Long id) {
        super("Impossible de trouver l'utilisateur avec l'ID ["+id+"]");
    }
}
