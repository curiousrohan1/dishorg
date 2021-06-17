package org.dishorg.dishorg;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GroceryListController {
    private final GroceryListRepository repo;

    public GroceryListController(GroceryListRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/groceries")
    GroceryList newGrocList(@RequestBody GroceryList newGroceryList) {
        try {
            if (repo.count() > 150) {
                throw new TooManyGroceriesException();
            }
            return repo.save(newGroceryList);
        } catch (DataIntegrityViolationException e) {
            throw new DuplicateGroceryListException(newGroceryList);
        }
    }


    @GetMapping("/groceries")
    List<GroceryList> all() {
        return repo.findAll();
    }

    @GetMapping("/groceries/{id}")
    GroceryList one(@PathVariable Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new GroceryListNotFoundException(id));
    }

    @PutMapping("/groceries/{id}")
    GroceryList replaceGroceryList(@RequestBody GroceryList newGroceryList, @PathVariable Long id) {
        return repo.findById(id)
                .map(groceryList -> {
                    groceryList.setName(newGroceryList.getName());
                    groceryList.setRecipes(newGroceryList.getRecipes());
                    return repo.save(groceryList);
                })
                .orElseGet(() -> {
                    newGroceryList.setId(id);
                    return repo.save(newGroceryList);
                });
    }

    @DeleteMapping("/groceries/{id}")
    String deleteGrocery(@PathVariable Long id) {
        repo.deleteById(id);
        return "{\"status\": \"Success\"}";
    }
}
