package com.jor.hotel.controllers;

import com.jor.hotel.models.Guest;
import com.jor.hotel.models.dtos.GuestDto;
import com.jor.hotel.services.GuestService;
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
public class GuestController {
    @Autowired
    private GuestService guestService;

    private Guest getGuestById(long id) {
        Optional<Guest> guestOptional = guestService.getById(id);

        if (guestOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Guest with %d does not exist", id));
        }

        return guestOptional.get();
    }

    @PostMapping(path = "guests")
    @ResponseBody
    public ResponseEntity<Guest> create(@RequestBody @Valid final GuestDto guestDto) {
        Guest guest = new Guest();
        BeanUtils.copyProperties(guestDto, guest);
        guestService.save(guest);
        return ResponseEntity.ok().body(guest);
    }

    @GetMapping(path = "guests/{id}")
    public ResponseEntity<Guest> getById(@PathVariable(required = true) @Valid @Min(1) final long id) {
        Guest guest = this.getGuestById(id);

        return ResponseEntity.ok().body(guest);
    }

    @PutMapping(path = "guests/{id}")
    public ResponseEntity<Guest> update(@PathVariable(required = true) @Valid @Min(1) final long id
            , @RequestBody @Valid final GuestDto guestDto) {
        Guest guest = this.getGuestById(id);
        BeanUtils.copyProperties(guestDto, guest);
        guestService.save(guest);

        return ResponseEntity.ok().body(guest);
    }

    @DeleteMapping(path = "guests/{id}")
    public ResponseEntity delete(@PathVariable(required = true) @Valid @Min(1) final long id) {
        // If the guest does not exist this throws a 404
        this.getGuestById(id);

        guestService.deleteById(id);

        return ResponseEntity.ok().body(id);
    }

    @GetMapping("guests")
    public ResponseEntity<Iterable<Guest>> getGuests(@RequestParam(required = false) String name,
                                                   @RequestParam(required = false, defaultValue = "true") @Valid boolean ignoreCase,
                                                   @RequestParam(required = false) @Valid boolean exactMatch) {
        Iterable<Guest> guests;

        if (name != null && !name.isEmpty()) {
            guests = guestService.findByName(name, ignoreCase, exactMatch);
        } else {
            guests = guestService.getAll();
        }

        return ResponseEntity.ok().body(guests);
    }
}