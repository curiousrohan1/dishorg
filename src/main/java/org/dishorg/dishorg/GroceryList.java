package org.dishorg.dishorg;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class GroceryList {
    private @Id
    @GeneratedValue
    Long id;

    @Column(unique = true)
    private String name;

    @ManyToMany
    @JoinTable(
            name = "grocery_list_recipe",
            joinColumns = @JoinColumn(name = "grocery_list_id"),
            inverseJoinColumns = @JoinColumn(name = "recipe_id"))
    private Set<Recipe> recipes;

    public GroceryList() {
    }

    public GroceryList(String name, Set<Recipe> recipes) {
        this.name = name;
        this.recipes = recipes;
    }
}
