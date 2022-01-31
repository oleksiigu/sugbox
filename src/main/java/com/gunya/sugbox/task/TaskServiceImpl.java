package com.gunya.sugbox.task;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository repository) {
        taskRepository = repository;
    }

    public Task get(Long id){
        return taskRepository.findById(id)
                .orElseThrow(()-> new TaskNotFoundException("Task wasn't found"));
    }

    public List<Task> getAll(){
        return taskRepository.findAll();
    }

    public Task create(Task newTask){
        return taskRepository.save(newTask);
    }

    public void update(Task task){
        taskRepository.save(task);
    }

    public boolean delete(Long id){
        if(taskRepository.existsById(id)){
            taskRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
