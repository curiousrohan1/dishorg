package org.dishorg.dishorg;

class GroceryListNotFoundException extends RuntimeException {
    GroceryListNotFoundException(Long id) {
        super("Could not find grocery list #" + id);
    }
}