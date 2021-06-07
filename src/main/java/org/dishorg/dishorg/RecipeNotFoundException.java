package org.dishorg.dishorg;

class RecipeNotFoundException extends RuntimeException {
    RecipeNotFoundException(Long id) {
        super("Could not find recipe #" + id);
    }
}