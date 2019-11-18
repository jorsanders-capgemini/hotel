package com.jor.hotel.repositories;

import com.jor.hotel.models.Room;
import org.springframework.data.repository.CrudRepository;

public interface RoomRepository extends CrudRepository<Room, Integer> {
}
