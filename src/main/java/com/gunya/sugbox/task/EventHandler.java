package com.gunya.sugbox.task;

import com.gunya.sugbox.WebSocketConfiguration;
import lombok.AllArgsConstructor;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.hateoas.server.EntityLinks;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import static com.gunya.sugbox.WebSocketConfiguration.MESSAGE_PREFIX;

@Component
@AllArgsConstructor
@RepositoryEventHandler(Task.class)
public class EventHandler {
    private final SimpMessagingTemplate webSocket;
    private final EntityLinks entityLinks;

    @HandleAfterCreate
    public void newTask(Task task) {
        this.webSocket.convertAndSend(MESSAGE_PREFIX + "/newTask", getPath(task));
    }

    @HandleAfterDelete
    public void deleteTask(Task task) {
        this.webSocket.convertAndSend(MESSAGE_PREFIX + "/deleteTask", getPath(task));
    }

    @HandleAfterSave
    public void updateTask(Task task) {
        this.webSocket.convertAndSend(MESSAGE_PREFIX + "/updateTask", getPath(task));
    }

    private String getPath(Task task) {
        return this.entityLinks.linkForItemResource(task.getClass(),
                task.getId()).toUri().getPath();
    }
}
