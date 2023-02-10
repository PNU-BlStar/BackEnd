package com.bstarbackend.bstar.web;

import com.bstarbackend.bstar.config.auth.dto.LoginUser;
import com.bstarbackend.bstar.config.auth.dto.SessionUser;
import com.bstarbackend.bstar.service.PostsService;
import com.bstarbackend.bstar.web.dto.PostsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Controller
public class IndexController {

    private final PostsService postsService;
    private final HttpSession httpSession;

    @GetMapping("/main")
    public String index(Model model, @LoginUser SessionUser user) {
        model.addAttribute("posts", postsService.findAll());

        if (user != null)
            model.addAttribute("userName", user.getName());

        //로그인 한 main 페이지 보여줌
        return "main";
    }

    @GetMapping("/posts/save")
    public String postsSave() {

        //게시글 작성하는 페이지
        return "posts-save";
    }

    @GetMapping("/posts/update/{id}")
    public String postsUpdate(@PathVariable Long id, Model model) {
        PostsResponseDto dto = postsService.findById(id);
        model.addAttribute("post", dto);

        //게시글 수정하는 페이지
        return "posts-update";
    }

}