import { readFileSync } from 'node:fs';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers/resolvers';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const url = process.env.MONGODB_URI;
const typeDefs = readFileSync('./src/schemas/schema.graphql', 'utf8');
const port = process.env.PORT || 4000;

// Need to apply cors
async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    const app = express();
    app.use(cors());
    app.use(express.static('../frontend/build'));
    server.applyMiddleware({
        app,
    });
    app.listen(port, () => {
        console.log(`🚀  Server ready at http://localhost:${port}`);
        console.log(
            `GraphQL Server is ready at http://localhost:${port}${server.graphqlPath}`,
        );
    });
}
mongoose
    .connect(url!)
    .then(() => {
        console.log('connected to MongoDB');
        startApolloServer();
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });
