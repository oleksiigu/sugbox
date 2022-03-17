package com.gunya.sugbox.task;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gunya.sugbox.manager.Manager;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Entity
public class Task {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private String reporter;
    private String category;
    private TaskState state;
    private LocalDateTime reportedAt = LocalDateTime.now();
}
