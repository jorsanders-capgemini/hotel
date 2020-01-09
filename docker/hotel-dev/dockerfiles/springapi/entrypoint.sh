#!/bin/sh

mvn -Dmaven.test.skip=true --no-snapshot-updates package
java -Xdebug -Xrunjdwp:transport=dt_socket,address=*:5005,server=y,suspend=n \
  -jar target/hotel-0.0.1.jar com.jor.hotel.HotelApplication