package org.dishorg.dishorg;

import javax.persistence.Entity;
import java.util.List;
@Entity
public class Recipe {
    private List<Ingredient> ingredients;
    private String name;

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "ingredients=" + ingredients +
                ", name='" + name + '\'' +
                '}';
    }
}
