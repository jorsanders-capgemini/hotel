ARG OPENJDKVERSION=0
FROM openjdk:${OPENJDKVERSION}-alpine

#RUN apk add --update ca-certificates \
#    && rm -rf /var/cache/apk/* \
#    && find /usr/share/ca-certificates/mozilla/ -name "*.crt" -exec keytool -import -trustcacerts \
#        -keystore /usr/lib/jvm/java-1.8-openjdk/jre/lib/security/cacerts -storepass changeit -noprompt \
#        -file {} -alias {} \; \
#        && keytool -list -keystore /usr/lib/jvm/java-1.11-openjdk/jre/lib/security/cacerts --storepass changeit

ENV MAVEN_VERSION 3.6.3
ENV MAVEN_HOME /usr/lib/mvn
ENV PATH $MAVEN_HOME/bin:$PATH

RUN wget http://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz
RUN tar -zxvf apache-maven-$MAVEN_VERSION-bin.tar.gz
RUN rm apache-maven-$MAVEN_VERSION-bin.tar.gz
RUN  mv apache-maven-$MAVEN_VERSION /usr/lib/mvn