package com.bstarbackend.bstar.config.auth;

import com.bstarbackend.bstar.domain.user.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final CustomOAuth2UserService customOAuth2UserService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .headers().frameOptions().disable()
                .and()
                .authorizeRequests()
                .antMatchers("/", "/login", "/css/**", "/images/**", "/js/**", "/h2-console/**", "/profile").permitAll()
                .antMatchers("/main").hasRole(Role.USER.name())
                .anyRequest().permitAll()
                .and()
                .logout()
                .logoutSuccessUrl("/login")
                .and()
                .oauth2Login()
                .defaultSuccessUrl("/main", true)
                .userInfoEndpoint()
                .userService(customOAuth2UserService);
    }
}
