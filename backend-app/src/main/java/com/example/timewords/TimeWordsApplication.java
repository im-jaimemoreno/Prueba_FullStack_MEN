package com.example.timewords;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class TimeWordsApplication {
    private static final Logger log = LoggerFactory.getLogger(TimeWordsApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(TimeWordsApplication.class, args);
    }

    @PostConstruct
    void started() {
        log.info("[demo] Time in Words backend listo. Endpoint: POST /api/time/upload (multipart file)");
    }
}
