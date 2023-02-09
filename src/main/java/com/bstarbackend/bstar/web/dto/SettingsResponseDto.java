package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.setting.Settings;
import lombok.Getter;

@Getter
public class SettingsResponseDto {
    private String title;
    private String nickname;

    private String intro;

    private String email;

    public SettingsResponseDto(Settings entity) {
        this.title = entity.getTitle();
        this.nickname = entity.getNickname();
        this.intro = entity.getIntro();
        this.email = entity.getEmail();
    }
}
