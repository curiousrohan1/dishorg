package org.dishorg.dishorg;

public class TooManyRecipesException extends RuntimeException {
    TooManyRecipesException() {
        super("The maximum number of recipes has been reached!");
    }
}
