package com.afropreneurdigital.blog.helper;

import lombok.Data;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Data
public class DateHelper {
    private final String DATE_FORMAT = "yyyy/MM/dd HH:mm:ss";
    private final DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern(DATE_FORMAT);
    private Date currentDate;

    public DateHelper() {
        this.currentDate = new Date();
    }

    public LocalDateTime getDateXDaysFromCurrentDate(long x) {
        LocalDateTime localDateTime = currentDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
        return localDateTime.plusDays(x);
    }
}
