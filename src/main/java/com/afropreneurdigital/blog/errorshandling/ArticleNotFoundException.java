package com.afropreneurdigital.blog.errorshandling;

public class ArticleNotFoundException extends RuntimeException {
    ArticleNotFoundException(Long id) {
        super("Impossible de trouver l'article dont l'ID est ["+id+"]");
    }
    ArticleNotFoundException() {
        super("Aucun article trouvé dans");
    }
}
