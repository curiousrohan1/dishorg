package org.dishorg.dishorg;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class Recipe {
    private @Id
    @GeneratedValue
    Long id;

    @Column(unique = true)
    private String name;

    @ElementCollection
    private List<Ingredient> ingredients;

    @ManyToMany(mappedBy = "recipes")
    private Set<GroceryList> groceryList;

    public Recipe() {
    }

    public Recipe(String name, List<Ingredient> ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}
