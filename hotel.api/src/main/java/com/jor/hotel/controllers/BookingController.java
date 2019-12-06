package com.jor.hotel.controllers;

import com.jor.hotel.models.Booking;
import com.jor.hotel.models.dtos.BookingDto;
import com.jor.hotel.services.BookingService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.util.Map;
import java.util.Optional;

@RestController
public class BookingController {
    @Autowired
    private BookingService bookingService;

    private Booking getBookingById(long id) {
        Optional<Booking> bookingOptional = bookingService.getById(id);

        if (bookingOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Booking with %d does not exist", id));
        }

        return bookingOptional.get();
    }

    @PostMapping(path = "bookings")
    @ResponseBody
    public ResponseEntity<Booking> create(@RequestBody @Valid final BookingDto bookingDto) {
        Booking booking = new Booking();
        bookingService.setPropertiesFromDto(bookingDto, booking);
        booking = bookingService.save(booking);

        return ResponseEntity.ok().body(booking);
    }

    @GetMapping(path = "bookings/{id}")
    public ResponseEntity<Booking> getById(@PathVariable(required = true) @Valid @Min(1) final long id) {
        Booking booking = this.getBookingById(id);

        return ResponseEntity.ok().body(booking);
    }

    @PutMapping(path = "bookings/{id}")
    public ResponseEntity<Booking> update(@PathVariable(required = true) @Valid @Min(1) final long id
            , @RequestBody @Valid final BookingDto bookingDto) {
        Booking booking = this.getBookingById(id);
        bookingService.setPropertiesFromDto(bookingDto, booking);
        bookingService.save(booking);

        return ResponseEntity.ok().body(booking);
    }

    @DeleteMapping(path = "bookings/{id}")
    public ResponseEntity delete(@PathVariable(required = true) @Valid @Min(1) final long id) {
        // If the booking does not exist this throws a 404
        this.getBookingById(id);

        bookingService.deleteById(id);

        return ResponseEntity.ok().body(id);
    }

    @GetMapping("bookings")
    public ResponseEntity<Iterable<Booking>> getBookings() {
        Iterable<Booking> bookings = bookingService.getAll();

        return ResponseEntity.ok().body(bookings);
    }
}