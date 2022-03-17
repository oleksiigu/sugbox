package com.gunya.sugbox.manager;

import lombok.AllArgsConstructor;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class SpringDataJpaUserDetailsService implements UserDetailsService {

    private final ManagerRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Manager manager = this.repository.findByName(username);

        return new User(manager.getName(), manager.getPassword(),
                AuthorityUtils.createAuthorityList(manager.getRoles().toArray(new String[0])));
    }
}
