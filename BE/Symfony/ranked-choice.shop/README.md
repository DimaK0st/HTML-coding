Run proj:
```bash
make up
```

Open the container
```bash
make shell
```

Enable uuid:

```bash
docker-compose exec database bash
psql -h 127.0.0.1 -d ranker_database -U app -W #pass:app
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```