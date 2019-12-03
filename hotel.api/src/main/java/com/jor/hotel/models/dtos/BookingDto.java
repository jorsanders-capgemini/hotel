package com.jor.hotel.models.dtos;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.Date;

public class BookingDto {
    @Min(1)
    private long guestId;

    @Min(1)
    private long roomId;

    private Date bookingDate;

    @Min(1)
    private int nights;

    public long getGuestId() {
        return guestId;
    }

    public long getRoomId() {
        return roomId;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public int getNights() {
        return nights;
    }
}
