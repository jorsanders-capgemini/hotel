package com.jor.hotel.repositories;

import com.jor.hotel.models.Booking;
import org.springframework.data.repository.CrudRepository;

public interface BookingRepository extends CrudRepository<Booking, Long> {
}
