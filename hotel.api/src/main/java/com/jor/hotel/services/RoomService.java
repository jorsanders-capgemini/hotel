package com.jor.hotel.services;

import com.jor.hotel.models.Room;
import com.jor.hotel.models.dtos.roomDto;
import com.jor.hotel.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    public Iterable<Room> getAll() {
        return roomRepository.findAll();
    }

    public Iterable<Room> findByName(String name, boolean ignoreCase, boolean exactMatch) {
        Iterable<Room> rooms;

        if (ignoreCase) {
            if (exactMatch) {
                rooms = roomRepository.findByNameIgnoreCase(name);
            } else {
                rooms = roomRepository.findByNameIgnoreCaseContaining(name);
            }
        } else if (exactMatch) {
            rooms = roomRepository.findByName(name);
        } else {
            rooms = roomRepository.findByNameContaining(name);
        }

        return rooms;
    }

    public Optional<Room> getById(long id) {
        return roomRepository.findById(id);
    }

    public Room save(Room room) {
        return roomRepository.save(room);
    }

    public void deleteById(long id) {
        roomRepository.deleteById(id);
    }
}
