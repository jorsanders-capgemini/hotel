package com.jor.hotel.controllers;

import com.jor.hotel.models.Room;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class RoomController {

    @CrossOrigin
    @GetMapping("api/rooms")
    public ResponseEntity<List<Room>> getIngredients() {
        List<Room> roomList = new ArrayList<>();

        // Just for fun set capacity to random int
        Random random = new Random();
        int min = 2;
        int max = 6;

        for (int i = 0; i < 10; i++) {
            Room room = new Room();
            room.setCapacity(random.nextInt(max - min) + min);
            room.setName("Room 40" + i);

            roomList.add(room);
        }

        return ResponseEntity.ok().body(roomList);
    }
}
