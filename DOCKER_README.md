# Meecrogate - Guide de Conteneurisation Docker

## Prérequis

- [Docker](https://docs.docker.com/get-docker/) installé sur votre machine
- [Docker Compose](https://docs.docker.com/compose/install/) (optionnel, pour une gestion simplifiée)

## Construction de l'image

```bash
docker build -t meecrogate-app .
```

## Lancement du conteneur

### Méthode simple

```bash
docker run -d -p 8080:80 --name meecrogate meecrogate-app
```

L'application sera accessible à l'adresse : `http://localhost:8080`

### Avec Docker Compose

Créez un fichier `docker-compose.yml` :

```yaml
version: '3.8'

services:
  meecrogate:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

Puis lancez :

```bash
docker-compose up -d
```

## Commandes utiles

### Voir les logs

```bash
docker logs -f meecrogate
```

### Arrêter le conteneur

```bash
docker stop meecrogate
```

### Supprimer le conteneur

```bash
docker rm meecrogate
```

### Reconstruire l'image (après modifications)

```bash
docker build --no-cache -t meecrogate-app .
```

## Variables d'environnement

Pour passer des variables d'environnement au build :

```bash
docker build --build-arg VITE_API_URL=https://api.example.com -t meecrogate-app .
```

## Production

Pour un déploiement en production, considérez :

1. **HTTPS** : Utilisez un reverse proxy (Traefik, Caddy) ou un load balancer avec SSL
2. **Healthcheck** : Ajoutez une vérification de santé dans le Dockerfile
3. **Ressources** : Limitez la mémoire et le CPU du conteneur

### Exemple avec limites de ressources

```bash
docker run -d \
  -p 8080:80 \
  --memory="256m" \
  --cpus="0.5" \
  --name meecrogate \
  meecrogate-app
```

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Docker Container                  │
│  ┌───────────────────────────────────────────────┐  │
│  │                  Nginx (Port 80)              │  │
│  │  ┌─────────────────────────────────────────┐  │  │
│  │  │         Static Files (React App)        │  │  │
│  │  │              /usr/share/nginx/html      │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

## Support

Pour toute question, contactez l'équipe Meecrogate.
