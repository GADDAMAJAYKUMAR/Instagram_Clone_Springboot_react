# Use OpenJDK 17 (LTS) as base image
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy your jar
COPY target/clone-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8080

# Run the jar
CMD ["java", "-jar", "app.jar"]
