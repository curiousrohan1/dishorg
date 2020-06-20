package org.dishorg.dishorg;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecipeController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @PostMapping("/recipes")
    public String createRecipe(@RequestBody Recipe data) {
        System.out.println(data);
        return "hello there!";
    }
}
