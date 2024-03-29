package org.dishorg.dishorg;

import lombok.Getter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {DuplicateRecipeException.class, DuplicateGroceryListException.class, TooManyGroceriesException.class, TooManyRecipesException.class})
    protected ResponseEntity<Object> handleConflict(RuntimeException ex, WebRequest request) {
        return handleExceptionInternal(ex, new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage()),
                new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

    @Getter
    private static class ApiError {
        private final int statusCode;
        private final HttpStatus status;
        private final String message;

        public ApiError(HttpStatus status, String message) {
            this.statusCode = status.value();
            this.status = status;
            this.message = message;
        }
    }
}
