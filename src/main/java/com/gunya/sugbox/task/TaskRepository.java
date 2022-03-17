package com.gunya.sugbox.task;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@PreAuthorize("hasRole('ROLE_MANAGER')")
@RepositoryRestResource(collectionResourceRel = "tasks", path = "tasks")
public interface TaskRepository extends CrudRepository<Task, Long> {
}
