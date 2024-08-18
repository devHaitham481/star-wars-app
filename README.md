# Star Wars Full Stack Application

This is a full-stack application that consumes the Star Wars API to provide information about planets, starships, and characters from the Star Wars universe. The application is built using a NestJS backend and a Next.js frontend, and it is fully dockerized for easy deployment.

## Features

- **Planets**: View detailed information about various planets in the Star Wars universe.
- **Starships**: Explore different starships with their specifications.
- **Characters**: Learn about iconic characters from the Star Wars series.

## Prerequisites

- Docker and Docker Compose must be installed on your system.

## Getting Started

To get the application up and running, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/star-wars-app.git
   cd star-wars-app
   


2. **Build and Run the Application:**
Use Docker Compose to build and start the application. This command will build the Docker images and start the services defined in the docker-compose.yml file.
```bash
docker-compose up --build
```

3. **Access the Application:** 
Once the containers are up and running, you can access the application by navigating to `http://localhost:3000` in your web browser.
