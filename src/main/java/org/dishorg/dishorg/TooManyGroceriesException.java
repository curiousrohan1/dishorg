package org.dishorg.dishorg;

public class TooManyGroceriesException extends RuntimeException {
    TooManyGroceriesException() {
        super("The maximum number of grocery lists has been reached!");
    }
}
