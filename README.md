# Vicoh Hotel

Vite + React site for [vicohhotel.com](https://vicohhotel.com).

## Local

```bash
npm install
npm run dev
```

## VPS (Docker + Nginx)

Static build served by nginx in Docker on host `127.0.0.1:6400`. Host nginx proxies the domain to that port.

Push to `main` triggers GitHub Actions deploy (`git pull` + `docker compose up -d --build`).
