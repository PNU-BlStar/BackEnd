package com.bstarbackend.bstar.domain.setting;

import com.bstarbackend.bstar.domain.BaseTimeEntity;
import com.bstarbackend.bstar.domain.user.Role;
import com.bstarbackend.bstar.domain.user.Users;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Settings extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String nickname;

    private String intro;

    private String email;

    @Builder
    public Settings(String title, String nickname, String intro, String email) {
        this.title = title;
        this.nickname = nickname;
        this.intro = intro;
        this.email = email;
    }

    public void update(String title, String nickname, String intro) {
        this.title = title;
        this.nickname = nickname;
        this.intro = intro;
    }

}
