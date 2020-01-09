package com.jor.hotel.models.dtos;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

public class RoomDto {
    @NotBlank
    private String name;

    @Min(1)
    private int capacity;

    public String getName() {
        return name;
    }

    public int getCapacity() {
        return capacity;
    }
}
