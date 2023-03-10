# API CUBES

API permettant au de lier les données envoyées par un raspberry en base et de les afficher dans le front.

## Lancement

```bash
docker-compose up -d && npm run dev
```

## Lancer une migration

```bash
npx prisma migrate dev
```

## Actualiser le client prisma

```bash
npx prisma generate
```

Si besoin, ne pas hésiter à relancer visual studio code
