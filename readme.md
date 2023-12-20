fullstack app w/ qwik

The complete frontend with auth (via supabase.com) & protected routes has already been created. Backend currently in progress. nginx as an api gateway (via docker) ready, but nginx does not yet speak correctly with qwik, because the deploy of the node.js middleware (inside the frontend) fails here. maybe a qwik problem:
1. no server dir is created during build
2. an entry.express.tsx (and consorts) is created, but stored in src. File cannot be addressed:
2.1 node src/entry.express.tsx results in: TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".tsx"
2.2 node --loader ts-node/esm src/entry.express.tsx results in: Error: ERR_INVALID_MODULE_SPECIFIER @qwik-city-plan is not a valid package

maybe the same problem as in https://github.com/BuilderIO/qwik/issues/3297 ?!
