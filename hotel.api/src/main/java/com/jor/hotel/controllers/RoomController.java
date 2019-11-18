package com.jor.hotel.controllers;

import com.jor.hotel.models.Room;
import com.jor.hotel.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class RoomController {
    @Autowired
    private RoomRepository roomRepository;

    @PostMapping(path = "/api/rooms/add")
    @ResponseBody
    public String addNewRoom(@RequestParam String name, @RequestParam Integer capacity) {
        Room room = new Room();
        room.setName(name);
        room.setCapacity(capacity);
        roomRepository.save(room);
        return "Saved";
    }

    @CrossOrigin
    @GetMapping("api/rooms")
    @ResponseBody
    public Iterable<Room> getIngredients() {
        return roomRepository.findAll();
    }
}
