package com.gunya.sugbox.manager;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Entity
public class Manager {

    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @JsonIgnore
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles;

    public void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }

    public Manager() {}

    public Manager(String name, String password, List<String> roles) {

        this.name = name;
        this.setPassword(password);
        this.roles = roles;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Manager manager = (Manager) o;
        return Objects.equals(id, manager.id) &&
                Objects.equals(name, manager.name) &&
                Objects.equals(password, manager.password) &&
                Arrays.equals(roles.toArray(), manager.roles.toArray());
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, name, password);
        result = 31 * result + Arrays.hashCode(roles.toArray());
        return result;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "Manager{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", roles=" + Arrays.toString(roles.toArray()) +
                '}';
    }
}
