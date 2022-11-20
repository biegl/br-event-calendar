[![Netlify Status](https://api.netlify.com/api/v1/badges/4984e60d-c7e6-42a9-9af2-c690559ba2a0/deploy-status)](https://app.netlify.com/sites/br-hall-umgebung/deploys)

## Development

Clone the repo and install required dependencies.

```bash
npm install
npm run dev
```

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/events](http://localhost:3000/api/events). This endpoint can be edited in `pages/api/events.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes.

## TODO:

-   [] Handle pagination
    Currently does not handle pagination correctly and returns 100 records at maximum. If the total exceeds 100 records meta.total returns null. The solution for now is to use descending sorting and return only the last 100 records.
-   [x] Filter: Return only events that are not of type `Pistenrettung`
-   [] Add schema validation
-   [x] Add link to event detail page
-   [x] Set environment variables
-   [x] Report and collect errors centrally
-   [] Add tests
-   [x] Add request caching
