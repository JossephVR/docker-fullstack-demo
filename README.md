# fullstack-user-manager

A full-stack CRUD application for managing users, containerized with Docker using a multi-service architecture.
## Tech Stack

- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Infrastructure:** Docker, Docker Compose, Nginx

## Architecture

Three containerized services orchestrated with Docker Compose:

- `frontend` — React app built with Vite, served by Nginx (multi-stage build)
- `backend` — REST API built with Node.js and Express
- `db` — PostgreSQL 16 database with a persistent volume

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose installed

### Run the project

```bash
git clone https://github.com/JossephVR/fullstack-user-manager.git
cd fullstack-user-manager
docker compose up --build
```

Then open [http://localhost](http://localhost) in your browser.

> If port 80 is unavailable, change the frontend port mapping in `docker-compose.yml` to `"8080:80"` or any free port.

### Environment variables

The backend reads database credentials from environment variables defined in `docker-compose.yml`. See `backend/.env.example` for the full list of variables.

## Features

- View all users
- Create a new user
- Edit an existing user
- Delete a user with confirmation modal
