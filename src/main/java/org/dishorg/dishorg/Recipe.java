package org.dishorg.dishorg;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
public class Recipe {
    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "grocery_list_recipe",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "grocery_list_id"))
    Set<GroceryList> groceryLists;

    private @Id
    @GeneratedValue
    Long id;

    @Column(unique = true)
    private String name;

    @ElementCollection
    private List<Ingredient> ingredients;

    public Recipe() {
    }

    public Recipe(String name, List<Ingredient> ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}
