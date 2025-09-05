package com.example.timewords;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;

@RestController
@RequestMapping("/api/time")
@CrossOrigin(origins = "*")
@Tag(name = "Time (Demo)", description = "Endpoints sencillos para la prueba de conversión")
public class TimeController {

    private final TimeWordsService service;

    public TimeController(TimeWordsService service) {
        this.service = service;
    }

    @Operation(summary = "Sube archivo .txt (demo)", description = "Lee pares de líneas: hora y minutos")
    @PostMapping("/upload")
    public List<Map<String, String>> upload(@RequestParam("file") MultipartFile file) throws IOException {
        List<Map<String, String>> results = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8))) {
            // Nota: esto es una demo, no una validación exhaustiva.
            List<String> lines = br.lines()
                    .map(String::trim)
                    .filter(s -> !s.isEmpty())
                    .toList();

            for (int i = 0; i + 1 < lines.size(); i += 2) {
                int h = Integer.parseInt(lines.get(i)); // ej: 5
                int m = Integer.parseInt(lines.get(i + 1)); // ej: 47

                Map<String, String> entry = new LinkedHashMap<>();
                entry.put("hora", String.valueOf(h));       // "5"
                entry.put("minutos", String.valueOf(m));    // "47"
                entry.put("resultado", service.convertTime(h, m)); // "thirteen minutes to six"
                results.add(entry);
            }
        }
        return results;
    }
}
