package com.jor.hotel.repositories;

import com.jor.hotel.models.Guest;
import org.springframework.data.repository.CrudRepository;

public interface GuestRepository extends CrudRepository<Guest, Long> {
    Iterable<Guest> findByName(String name);
    Iterable<Guest> findByNameIgnoreCase(String name);
    Iterable<Guest> findByNameContaining(String name);
    Iterable<Guest> findByNameIgnoreCaseContaining(String name);
    Iterable<Guest> findByIdIn(long[] ids);
}
