package com.bstarbackend.bstar.domain.setting;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SettingsRepository extends JpaRepository<Settings, Long> {
    Optional<Settings> findByEmail(String email);
}
