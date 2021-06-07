package org.dishorg.dishorg;

public class DuplicateGroceryListException extends RuntimeException {
    DuplicateGroceryListException(GroceryList dupGrocList) {
        super("A grocery list named " + dupGrocList.getName() + " already exists!");
    }
}
