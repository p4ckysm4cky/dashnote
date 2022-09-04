import { IQuiz } from '../models/quiz';
import { Quiz as SchemaQuiz } from '../resolvers/resolvers-types';

export const quizToSchema = (quiz: IQuiz): SchemaQuiz => {
    return {
        id: quiz._id.toString(),
        name: quiz.name,
        description: quiz.description,
        cards: [], // Please change at a later date
    };
};
