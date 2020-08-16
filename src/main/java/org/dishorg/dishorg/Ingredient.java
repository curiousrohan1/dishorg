package org.dishorg.dishorg;

import lombok.Data;

import javax.persistence.Embeddable;

@Data
@Embeddable
public class Ingredient {
    private String name;
    private String unit;
    private double quantity;

    public Ingredient() {
    }

    public Ingredient(String name, String unit, double quantity) {
        this.name = name;
        this.unit = unit;
        this.quantity = quantity;
    }
}
