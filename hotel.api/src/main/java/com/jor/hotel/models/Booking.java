package com.jor.hotel.models;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    private Iterable<Guest> guests;

    @ManyToOne
    private Iterable<Room> rooms;

    private Date bookingDate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Iterable<Guest> getGuests() {
        return guests;
    }

    public void setGuests(Iterable<Guest> guests) {
        this.guests = guests;
    }

    public Iterable<Room> getRooms() {
        return rooms;
    }

    public void setRooms(Iterable<Room> rooms) {
        this.rooms = rooms;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Booking() {
    }
}