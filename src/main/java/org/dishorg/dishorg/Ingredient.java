package org.dishorg.dishorg;

import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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
