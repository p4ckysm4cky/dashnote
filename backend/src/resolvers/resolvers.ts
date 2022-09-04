import { Resolvers } from './resolvers-types';
import {
    fetchAllQuiz,
    fetchSpecificQuiz,
    newQuiz,
    deleteQuiz,
} from '../services/quiz';
import { newCard } from '../services/card';

export const resolvers: Resolvers = {
    Query: {
        allQuiz: async () => {
            return await fetchAllQuiz();
        },
        quiz: async (_, { quizId }) => {
            return await fetchSpecificQuiz(quizId);
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
        deleteQuiz: async (_, { quizId }) => {
            await deleteQuiz(quizId);
            return await fetchAllQuiz();
        },
    },
};
