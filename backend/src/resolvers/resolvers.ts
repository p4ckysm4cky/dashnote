import { Resolvers } from './resolvers-types';
import { fetchAllQuiz, fetchSpecificQuiz } from '../services/quiz';
import { newQuiz } from '../services/quiz';

export const resolvers: Resolvers = {
    Query: {
        allQuiz: async () => {
            return await fetchAllQuiz();
        },
        quiz: async (_, { id }) => {
            return await fetchSpecificQuiz(id);
        },
    },
    Mutation: {
        newQuiz: async (_, { name, description }) => {
            await newQuiz(name, description);
            return await fetchAllQuiz();
        },
    },
};
