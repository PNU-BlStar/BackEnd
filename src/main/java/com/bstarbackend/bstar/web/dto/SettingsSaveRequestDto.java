package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.setting.Settings;
import lombok.Builder;

public class SettingsSaveRequestDto {
    private String title;
    private String nickname;

    private String intro;
    private String email;

    @Builder
    public SettingsSaveRequestDto(String title, String nickname, String intro, String email) {
        this.title = title;
        this.nickname = nickname;
        this.intro = intro;
        this.email = email;
    }
    public Settings toEntity() {
        return Settings.builder()
                .title(title)
                .nickname(nickname)
                .intro(intro)
                .email(email)
                .build();
    }
}
