package org.dishorg.dishorg;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Recipe {
    private @Id
    @GeneratedValue
    Long id;
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
