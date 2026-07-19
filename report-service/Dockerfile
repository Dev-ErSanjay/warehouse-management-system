FROM eclipse-temurin:21-jre

WORKDIR /app

COPY target/report-service-1.0.0-SNAPSHOT.jar app.jar

EXPOSE 8085

ENTRYPOINT ["java","-jar","app.jar"]