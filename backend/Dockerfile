# Use a minimal JDK runtime
FROM eclipse-temurin:21-jre-alpine

# Set a non‑root user (optional but recommended)
RUN addgroup -S app && adduser -S -G app app
USER app

# Copy the jar into the image
COPY target/*.jar app.jar

# Expose the default Spring Boot port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java","-jar","/app.jar"]