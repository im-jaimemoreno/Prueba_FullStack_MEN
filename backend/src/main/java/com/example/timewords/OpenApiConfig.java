package com.example.timewords;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI timeWordsOpenAPI() {
        return new OpenAPI()
                .components(new Components())
                .info(new Info()
                        .title("Time in Words - Demo")
                        .description("Backend de prueba para convertir horas en palabras")
                        .version("v0.1-demo")
                );
    }
}
