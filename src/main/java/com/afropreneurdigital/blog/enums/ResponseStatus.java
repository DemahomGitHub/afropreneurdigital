package com.afropreneurdigital.blog.enums;

import lombok.Data;


public enum ResponseStatus {
    OK(200, "Opération réussie"),
    NOT_FOUND(300, "Elément introuvable");

    private ResponseStatus(Integer statusCode, String message) {
        this.statusCode = statusCode;
        this.message = message;
    }
    public Integer getStatusCode() {
        if (this.statusCode == null)
            throw new NullPointerException("Null status code property in "+this);
        return statusCode;
    }
    public String getMessage() {
        if (this.message == null) {
            throw new NullPointerException("Null message property in "+this);
        }
        return message;
    }
    private final Integer statusCode;
    private final String message;
}
