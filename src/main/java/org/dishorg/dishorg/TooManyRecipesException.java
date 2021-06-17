package org.dishorg.dishorg;

public class TooManyRecipesException extends RuntimeException {
    TooManyRecipesException() {
        super("The maximum amount of recipes has been reached!");
    }
}
