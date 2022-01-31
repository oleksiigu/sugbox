package com.gunya.sugbox;

import com.gunya.sugbox.task.Task;
import com.gunya.sugbox.task.TaskRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class InitDb {
    private static final Logger log = LoggerFactory.getLogger(InitDb.class);

    @Bean
    CommandLineRunner initDatabase(TaskRepository repository) {

        return args -> {
            log.info("Preloading " + repository.save(new Task()));
            log.info("Preloading " + repository.save(new Task()));
        };
    }
}
