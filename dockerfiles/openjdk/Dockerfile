ARG OPENJDKVERSION=0
FROM openjdk:${OPENJDKVERSION}-alpine

ENV MAVEN_VERSION 3.6.3
ENV MAVEN_HOME /usr/lib/mvn
ENV PATH $MAVEN_HOME/bin:$PATH

RUN wget http://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz
RUN tar -zxvf apache-maven-$MAVEN_VERSION-bin.tar.gz
RUN rm apache-maven-$MAVEN_VERSION-bin.tar.gz
RUN  mv apache-maven-$MAVEN_VERSION /usr/lib/mvn