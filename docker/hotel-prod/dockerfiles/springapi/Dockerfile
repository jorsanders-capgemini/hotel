ARG OPENJDKVERSION=0
FROM openjdk:${OPENJDKVERSION}-alpine

COPY ./compiled/springapi /app

WORKDIR /app
CMD java -jar hotel-0.0.1.jar com.jor.hotel.HotelApplication