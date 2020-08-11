package org.dishorg.dishorg;

public enum Unit {
    none(""),
    cups,
    fluidOz("fluid oz"),
    gallons,
    lbs,
    liters,
    milliliters,
    oz,
    pinch,
    quarts,
    tbsp,
    tsp;

    private final String friendlyName;

    Unit() {
        friendlyName = name();
    }

    Unit(String humanFriendly) {
        friendlyName = humanFriendly;
    }

    @Override
    public String toString() {
        return friendlyName;
    }
}