package com.gunya.sugbox.task;

import java.util.List;

public interface TaskService {
    Task get(Long id);
    List<Task> getAll();
    Task create(Task newTask);
    void update(Task task);
    boolean delete(Long id);
}
