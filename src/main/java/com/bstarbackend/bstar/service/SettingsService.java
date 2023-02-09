package com.bstarbackend.bstar.service;

import com.bstarbackend.bstar.domain.setting.Settings;
import com.bstarbackend.bstar.domain.setting.SettingsRepository;
import com.bstarbackend.bstar.web.dto.SettingsResponseDto;
import com.bstarbackend.bstar.web.dto.SettingsSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class SettingsService {
    private final SettingsRepository settingsRepository;

    @Transactional
    public Settings save(String name, String email)
    {
        String title = name + "의 블로그";
        String intro = "안녕하세요. " + name + "의 블로그입니다.";
        SettingsSaveRequestDto requestDto = new SettingsSaveRequestDto(title, name, intro, email);
        settingsRepository.save(requestDto.toEntity());
        return requestDto.toEntity();
    }

    @Transactional(readOnly = true)
    public SettingsResponseDto findByEmail(String name, String email) {
        Settings entity = settingsRepository.findByEmail(email)
                .orElse(save(name, email));

        return new SettingsResponseDto(entity);
    }
}
