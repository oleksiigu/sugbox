package com.gunya.sugbox.task;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService service){
        taskService = service;
    }

    @GetMapping
    public List<Task> getAll(){
        return taskService.getAll();
    }

    @GetMapping("/{id}")
    public Task findById(@PathVariable Long id){
        return taskService.get(id);
    }

    @PostMapping
    public Task create(@RequestBody Task task){
        return taskService.create(task);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        if(taskService.delete(id)) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }
}
