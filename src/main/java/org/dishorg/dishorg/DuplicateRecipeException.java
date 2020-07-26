package org.dishorg.dishorg;

public class DuplicateRecipeException extends RuntimeException {
    DuplicateRecipeException(Recipe dupRec) {
        super("A recipe named "+dupRec.getName() + " already exists!");
    }
}
