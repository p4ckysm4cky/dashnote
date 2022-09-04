import { Resolvers } from './resolvers-types';
import { fetchAllQuiz, fetchSpecificQuiz } from '../services/quiz';

export const resolvers: Resolvers = {
    Query: {
        allQuiz: async () => {
            return await fetchAllQuiz();
        },
        quiz: async (_, { id }) => {
            return await fetchSpecificQuiz(id);
        },
    },
};
