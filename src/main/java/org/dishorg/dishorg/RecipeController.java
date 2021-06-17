package org.dishorg.dishorg;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
public class RecipeController {
    private final RecipeRepository repo;

    public RecipeController(RecipeRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/recipes")
    Recipe newRecipe(@RequestBody Recipe newRecipe) {
        try {
            if (repo.count() > 3) {
                throw new TooManyRecipesException();
            }
            return repo.save(newRecipe);
        } catch (DataIntegrityViolationException e) {
            throw new DuplicateRecipeException(newRecipe);
        }
    }


    @GetMapping("/recipes")
    List<Recipe> all() {
        return repo.findAll();
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
        return "{\"status\": \"Success\"}";
    }

    @GetMapping("/units")
    List<String> getUnits() {
        List<String> units = new ArrayList<>();
        for (Unit unit : Unit.values()) {
            units.add(unit.toString());
        }
        Collections.sort(units);
        return units;
    }
}