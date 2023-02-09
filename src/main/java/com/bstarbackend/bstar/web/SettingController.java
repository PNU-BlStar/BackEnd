package com.bstarbackend.bstar.web;

import com.bstarbackend.bstar.service.SettingsService;
import com.bstarbackend.bstar.web.dto.SettingsResponseDto;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class SettingController {

    private final SettingsService settingsService;
    @GetMapping("/setting/info")
    public SettingsResponseDto test(Authentication authentication, @AuthenticationPrincipal UserDetails userDetails) {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        SettingsResponseDto settings = settingsService.findByEmail(oAuth2User.getAttribute("name"), oAuth2User.getAttribute("email"));
        return settings;
    }
}
