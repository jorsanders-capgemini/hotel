package com.jor.hotel.services;

import com.google.common.collect.Lists;
import com.jor.hotel.models.Guest;
import com.jor.hotel.repositories.GuestRepository;
import org.hibernate.id.GUIDGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class GuestService {
    @Autowired
    private GuestRepository guestRepository;

    public Iterable<Guest> getAll() {
        return guestRepository.findAll();
    }

    public Iterable<Guest> findByName(String name, boolean ignoreCase, boolean exactMatch) {
        Iterable<Guest> guests;

        if (ignoreCase) {
            if (exactMatch) {
                guests = guestRepository.findByNameIgnoreCase(name);
            } else {
                guests = guestRepository.findByNameIgnoreCaseContaining(name);
            }
        } else if (exactMatch) {
            guests = guestRepository.findByName(name);
        } else {
            guests = guestRepository.findByNameContaining(name);
        }

        return guests;
    }

    public List<Guest> getByIds(long[] ids){
        ArrayList<Guest> guests =  Lists.newArrayList(guestRepository.findByIdIn(ids));

        if(guests.size() != ids.length){
            // TODO: find out which ids are not found
            throw new IllegalArgumentException();
        }

        return guests;
    }

    public Optional<Guest> getById(long id) {
        return guestRepository.findById(id);
    }

    public Guest save(Guest guest) {
        return guestRepository.save(guest);
    }

    public void deleteById(long id) {
        guestRepository.deleteById(id);
    }
}
