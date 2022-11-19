This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development

Clone the repo and install required dependencies.

```bash
npm install
npm run dev
```

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/events](http://localhost:3000/api/events). This endpoint can be edited in `pages/api/events.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes.

## TODO:

[?] Handle pagination
Currently does not handle pagination correctly and returns 100 records at maximum. If the total exceeds 100 records meta.total returns null. The solution for now is to use descending sorting and return only the last 100 records.
[x] Filter: Return only events that are not of type `Pistenrettung`
[] schema validation
[x] Add link to event detail page
[x] Set environment variables
[] Report and collect errors centrally
[] Add tests
[x] caching
