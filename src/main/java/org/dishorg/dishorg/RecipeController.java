package org.dishorg.dishorg;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecipeController {
    private RecipeRepository repo;

    public RecipeController(RecipeRepository repo) {
        this.repo = repo;
    }
    @GetMapping("/recipes")
    List<Recipe> all() {
        return repo.findAll();
    }

    @PostMapping("/recipes")
    Recipe newRecipe(@RequestBody Recipe newRecipe) {
        return repo.save(newRecipe);
    }

    @PostMapping("/dummy")
    String dummy(@RequestBody String data) {
        System.out.println("data: " + data);
        return "success";
    }
//
//    @RequestMapping("/")
//    public String index() {
//        return "Greetings from Spring Boot!";
//    }

}
