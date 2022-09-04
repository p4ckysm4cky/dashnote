import { readFileSync } from 'node:fs';
import { ApolloServer } from 'apollo-server';
import { Resolvers } from './resolvers/resolvers-types';
import 'dotenv/config';
import mongoose from 'mongoose';

const url = process.env.MONGODB_URI;

mongoose
    .connect(url!)
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });

const typeDefs = readFileSync('./src/schemas/schema.graphql', 'utf8');

// Need to apply cors
const resolvers: Resolvers = {
    Query: {
        // typed resolvers!
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
