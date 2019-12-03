package com.jor.hotel.models.dtos;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.Date;

public class GuestDto {
    @NotBlank
    private String name;

    @Email
    private String email;

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}
