package com.jor.hotel.models.dtos;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.Date;

public class BookingDto {
    private long[] guestIds;

    private long[] roomIds;

    private Date bookingDate;

    @Min(1)
    private int nights;

    public int getNights() {
        return nights;
    }

    public void setNights(int nights) {
        this.nights = nights;
    }

    public long[] getGuestIds() {
        return guestIds;
    }

    public void setGuestIds(long[] guestIds) {
        this.guestIds = guestIds;
    }

    public long[] getRoomIds() {
        return roomIds;
    }

    public void setRoomIds(long[] roomIds) {
        this.roomIds = roomIds;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }
}
