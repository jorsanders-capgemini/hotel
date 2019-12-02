package com.jor.hotel.models;

import com.jor.hotel.models.dtos.roomDto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private int capacity;

    private String name;

    public Room() {
    }

    public Room(roomDto roomDto) {
        this.mapDto(roomDto);
    }

    public Room(long id, roomDto roomDto) {
        this.id = id;
        this.mapDto(roomDto);
    }

    public void mapDto(roomDto roomDto) {
        this.name = roomDto.getName();
        this.capacity = roomDto.getCapacity();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}