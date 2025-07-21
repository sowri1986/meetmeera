# Meera's Personal Website - Docker Deployment

This document provides instructions for containerizing and deploying Meera's personal website using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

## Quick Start

### Option 1: Docker Compose (Recommended)

1. **Clone the repository and navigate to the project directory**
   ```bash
   git clone <repository-url>
   cd meera-website
   ```

2. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the website**
   Open your browser and visit: `http://localhost:5173`

### Option 2: Docker CLI

1. **Build the Docker image**
   ```bash
   docker build -t meera-website .
   ```

2. **Run the container**
   ```bash
   docker run -p 5173:5173 --name meera-website meera-website
   ```

3. **Access the website**
   Open your browser and visit: `http://localhost:5173`

## Production Deployment

### Environment Variables

For production deployment, you may want to configure the following environment variables:

```bash
# Port configuration
PORT=5173

# Node environment
NODE_ENV=production
```

### Docker Compose for Production

```yaml
version: '3.8'

services:
  meera-website:
    build: .
    ports:
      - "80:5173"  # Map to port 80 for production
    environment:
      - NODE_ENV=production
      - PORT=5173
    restart: unless-stopped
    container_name: meera_website_prod
```

### Cloud Deployment

#### AWS ECS/Fargate
1. Push image to ECR
2. Create ECS task definition
3. Deploy using ECS service

#### Google Cloud Run
```bash
# Build and tag for GCR
docker build -t gcr.io/[PROJECT-ID]/meera-website .

# Push to GCR
docker push gcr.io/[PROJECT-ID]/meera-website

# Deploy to Cloud Run
gcloud run deploy meera-website \
  --image gcr.io/[PROJECT-ID]/meera-website \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

#### DigitalOcean App Platform
1. Connect your repository
2. Select Docker as build method
3. Configure environment variables
4. Deploy

## Container Management

### View running containers
```bash
docker ps
```

### View logs
```bash
docker logs meera-website
```

### Stop the container
```bash
docker stop meera-website
```

### Remove the container
```bash
docker rm meera-website
```

### Update the application
```bash
# Stop current container
docker-compose down

# Rebuild and restart
docker-compose up --build
```

## Health Checks

The application includes basic health monitoring. You can extend the Dockerfile with health checks:

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5173/ || exit 1
```

## Troubleshooting

### Container won't start
- Check if port 5173 is already in use: `lsof -i :5173`
- Verify Docker daemon is running: `docker info`

### Build issues
- Clear Docker cache: `docker system prune -a`
- Ensure all dependencies are properly listed in package.json

### Performance optimization
- Use multi-stage builds (already implemented)
- Minimize image layers
- Use .dockerignore to exclude unnecessary files

## Security Considerations

- The application runs as a non-root user (nodejs)
- Only necessary files are copied to the container
- Production dependencies only
- Regular base image updates recommended

## Monitoring and Logging

For production deployments, consider adding:
- Application Performance Monitoring (APM)
- Centralized logging (e.g., ELK stack)
- Container monitoring (e.g., Prometheus + Grafana)

## Support

For deployment issues or questions, please refer to the main README.md or contact the development team.