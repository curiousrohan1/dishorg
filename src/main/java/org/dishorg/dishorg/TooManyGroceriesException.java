package org.dishorg.dishorg;

public class TooManyGroceriesException extends RuntimeException {
    TooManyGroceriesException() {
        super("The maximum amount of grocery lists has been reached!");
    }
}
