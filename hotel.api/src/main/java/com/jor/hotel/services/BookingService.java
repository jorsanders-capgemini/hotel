package com.jor.hotel.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jor.hotel.models.Booking;
import com.jor.hotel.models.Guest;
import com.jor.hotel.models.Room;
import com.jor.hotel.models.dtos.BookingDto;
import com.jor.hotel.models.dtos.RoomDto;
import com.jor.hotel.repositories.BookingRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private GuestService guestService;
    @Autowired
    private RoomService roomService;

    public Iterable<Booking> getAll() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getById(long id) {
        return bookingRepository.findById(id);
    }

    public Booking save(Booking booking) {
        return bookingRepository.save(booking);
    }

    public void deleteById(long id) {
        bookingRepository.deleteById(id);
    }

    public void setPropertiesFromDto(BookingDto bookingDto, Booking booking){
        BeanUtils.copyProperties(bookingDto, booking);
        booking.setBookingDate(new Date(bookingDto.getBookingDate().getTime()));
        booking.setGuests(guestService.getByIds(bookingDto.getGuestIds()));
        booking.setRooms(roomService.getByIds(bookingDto.getRoomIds()));
    }
}
