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

    @GetMapping("/recipes/{id}")
    Recipe one(@PathVariable Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RecipeNotFoundException(id));
    }

    @PutMapping("/recipes/{id}")
    Recipe replaceRecipe(@RequestBody Recipe newRecipe, @PathVariable Long id) {
        return repo.findById(id)
                .map(recipe -> {
                    recipe.setName(newRecipe.getName());
                    recipe.setIngredients(newRecipe.getIngredients());
                    return repo.save(recipe);
                })
                .orElseGet(() -> {
                    newRecipe.setId(id);
                    return repo.save(newRecipe);
                });
    }

    @DeleteMapping("/recipes/{id}")
    String deleteRecipe(@PathVariable Long id) {
        repo.deleteById(id);
        return "{status: \"Success\"}";
    }
}