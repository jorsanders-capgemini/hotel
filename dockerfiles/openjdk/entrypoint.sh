#!/bin/bash
mvn -Dmaven.test.skip=true package
java -jar target/hotel-0.0.1.jar com.jor.hotel.HotelApplication