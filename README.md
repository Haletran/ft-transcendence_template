# ft-transcendence_template

Simple template for the 42 project `ft_transcendence`.

This template includes a basic setup for a web application using:
- `ViteJS` for the frontend
- `Fastify` for the backend
- `SQLlite` for the database
- `Docker` for containerization
- `Docker Compose` for orchestration
- `TypeScript` for type safety (both frontend and backend, might need to setup tRPC)
- HOT reloading for development
- API wrapper for the backend (in api.js file on frontend)
- `TailwindCSS` for styling

## Documentation

Some commands for the project : 

```bash
make # launch the backend
make down # stop and delete all containers
sudo npm install {name of the packages} # to install others packages if needed
```

If you want to add routes to your backend, go to the `backend/src/index.ts` :

```ts
// Here is simple example of a route /api/ping
instance.get('/api/ping', async (request, reply) => {
  return { message : "pong" }
})

// To called this route just use the wrapper like this :
const data = await callAPI("/ping", "GET");
console.log(data);
// It it worked it will print "pong" in the console of your browser
```

To properly use `ts`, you should use `interface` so that you always respect the same type for all of
your response. For example, the User interface will always be the same, since a user has an id,name, password, etc...

> Notes: If you want to add another field for you user like profile-picture or else, add it to the interface in the
> frontend which is located in the `types/index.ts` and  `backend/src/models/User.ts`

So you should use the User interface when getting the data of a user for example. 
There is some code example in the `frontend` if needed.

More to come...
 