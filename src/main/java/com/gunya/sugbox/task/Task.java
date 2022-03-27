package com.gunya.sugbox.task;

import lombok.*;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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
