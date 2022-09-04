import { Resolvers } from './resolvers-types';
import { fetchAllQuiz, fetchSpecificQuiz, newQuiz } from '../services/quiz';
import { newCard } from '../services/card';

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
        addCard: async (_, { quizId, term, answer }) => {
            await newCard(quizId, term, answer);
            return await fetchSpecificQuiz(quizId);
        },
    },
};
