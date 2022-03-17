package com.gunya.sugbox;

import com.gunya.sugbox.manager.Manager;
import com.gunya.sugbox.manager.ManagerRepository;
import com.gunya.sugbox.task.Task;
import com.gunya.sugbox.task.TaskRepository;
import com.gunya.sugbox.task.TaskState;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Collections;

@Configuration
@AllArgsConstructor
public class InitDb implements CommandLineRunner {
    private static final Logger log = LoggerFactory.getLogger(InitDb.class);

    private final TaskRepository taskRepository;
    private final ManagerRepository managerRepository;

    @Override
    public void run(String... args) throws Exception {
        this.managerRepository.save(new Manager("sgadmin", "Changeit",
                Collections.singletonList("ROLE_MANAGER")));

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken("sgadmin", "no metter",
                        AuthorityUtils.createAuthorityList("ROLE_MANAGER"))
        );

        Task newTask = new Task();
        newTask.setState(TaskState.TODO);
        newTask.setDescription("Drug this task to Done");
        newTask.setName("Your first task");
        log.info("Preloading " + taskRepository.save(newTask));
        SecurityContextHolder.clearContext();
    }
}
