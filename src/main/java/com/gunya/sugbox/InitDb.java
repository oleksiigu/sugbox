package com.gunya.sugbox;

import com.gunya.sugbox.task.Task;
import com.gunya.sugbox.task.TaskRepository;
import com.gunya.sugbox.task.TaskState;
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

        Task newTask = new Task();
        newTask.setState(TaskState.TODO);
        newTask.setDescription("Hello");

        Task doneTask = new Task();
        doneTask.setDescription("Done");
        doneTask.setState(TaskState.DONE);

        return args -> {
            log.info("Preloading " + repository.save(newTask));
            log.info("Preloading " + repository.save(doneTask));
        };
    }
}
