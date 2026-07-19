FROM eclipse-temurin:21-jre

WORKDIR /app

COPY target/warehouse-service-1.0.0-SNAPSHOT.jar app.jar

EXPOSE 8082

ENTRYPOINT ["java","-jar","app.jar"]