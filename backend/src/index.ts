import { readFileSync } from 'node:fs';
import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers/resolvers';
import 'dotenv/config';
import { Quiz } from './models/quiz';
import { Card } from './models/card';
import mongoose from 'mongoose';

const url = process.env.MONGODB_URI;
const typeDefs = readFileSync('./src/schemas/schema.graphql', 'utf8');

// Need to apply cors

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
    .connect(url!)
    .then(() => {
        console.log('connected to MongoDB');
        // The `listen` method launches a web server
        server.listen().then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });
