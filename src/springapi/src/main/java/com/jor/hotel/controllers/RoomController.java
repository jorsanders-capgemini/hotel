package com.jor.hotel.controllers;

import com.jor.hotel.models.Room;
import com.jor.hotel.models.dtos.RoomDto;
import com.jor.hotel.services.RoomService;
import org.jetbrains.annotations.NotNull;
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
public class RoomController {
    @Autowired
    private RoomService roomService;

    @Min(1)
    private Room getRoomById(long id) {
        Optional<Room> roomOptional = roomService.getById(id);

        if (!roomOptional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Room with %d does not exist", id));
        }

        return roomOptional.get();
    }

    @PostMapping(path = "rooms")
    @ResponseBody
    public ResponseEntity<Room> create(@RequestBody @Valid final RoomDto roomDto) {
        Room room = new Room();
        BeanUtils.copyProperties(roomDto, room);
        roomService.save(room);
        return ResponseEntity.ok().body(room);
    }

    @GetMapping(path = "rooms/{id}")
    public ResponseEntity<Room> getById(@PathVariable(required = true) @Valid @Min(1) final long id) {
        Room room = this.getRoomById(id);

        return ResponseEntity.ok().body(room);
    }

    @PutMapping(path = "rooms/{id}")
    public ResponseEntity<Room> update(@PathVariable(required = true) @Valid @Min(1) final long id
            , @RequestBody @Valid final RoomDto roomDto) {
        Room room = this.getRoomById(id);
        BeanUtils.copyProperties(roomDto, room);
        roomService.save(room);

        return ResponseEntity.ok().body(room);
    }

    @DeleteMapping(path = "rooms/{id}")
    public ResponseEntity delete(@PathVariable(required = true) @Valid @Min(1) final long id) {
        // If the room does not exist this throws a 404
        this.getRoomById(id);

        roomService.deleteById(id);

        return ResponseEntity.ok().body(id);
    }

    @GetMapping("rooms")
    public ResponseEntity<Iterable<Room>> getList(@RequestParam(required = false) String name,
                                                   @RequestParam(required = false, defaultValue = "true") @Valid boolean ignoreCase,
                                                   @RequestParam(required = false) @Valid boolean exactMatch) {
        Iterable<Room> rooms;

        if (name != null && !name.isEmpty()) {
            rooms = roomService.findByName(name, ignoreCase, exactMatch);
        } else {
            rooms = roomService.getAll();
        }

        return ResponseEntity.ok().body(rooms);
    }
}