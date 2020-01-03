#!/bin/bash
mvn package
java -cp target/hotel-0.0.1.jar com.jor.hotel.HotelApplication
