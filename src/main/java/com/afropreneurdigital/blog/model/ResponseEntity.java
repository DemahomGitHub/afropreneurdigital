package com.afropreneurdigital.blog.model;

import com.afropreneurdigital.blog.enums.ResponseStatus;
import lombok.Data;

@Data
public class ResponseEntity<T> {
    private final ResponseStatus status;
    private final T data;
    private final String message;
    public ResponseEntity(ResponseStatus status, T data) {
        this.data = data;
        this.status = status;
        this.message = status.getMessage();
    }
    public ResponseEntity(ResponseStatus status, String message) {
        this.status = status;
        this.message = message;
        this.data = null;
    }
}
