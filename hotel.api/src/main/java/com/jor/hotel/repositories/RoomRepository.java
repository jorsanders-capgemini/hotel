package com.jor.hotel.repositories;

import com.jor.hotel.models.Room;
import org.springframework.data.repository.CrudRepository;

public interface RoomRepository extends CrudRepository<Room, Long> {
    Iterable<Room> findByName(String name);
    Iterable<Room> findByNameIgnoreCase(String name);
    Iterable<Room> findByNameContaining(String name);
    Iterable<Room> findByNameIgnoreCaseContaining(String name);
}
