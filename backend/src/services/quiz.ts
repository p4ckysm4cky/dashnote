import { Quiz, IQuiz } from '../models/quiz';
import { HydratedDocument } from 'mongoose';
import { quizToSchema } from '../mappers/quizMapper';
import { Quiz as QuizSchema } from '../resolvers/resolvers-types';
import { ICard } from '../models/card';

export const newQuiz = async (name: string, description: string) => {
    const aQuiz: HydratedDocument<IQuiz> = new Quiz({
        name,
        description,
        cards: [],
    });
    const savedQuiz = await aQuiz.save();
    return quizToSchema(savedQuiz);
};

export const fetchAllQuiz = async (): Promise<QuizSchema[]> => {
    const quizArray = await Quiz.find({}).populate('cards');
    const returnArray = quizArray.map((quiz) => {
        return quizToSchema(quiz, quiz.cards as unknown as ICard[]);
    });
    return returnArray;
};

export const fetchSpecificQuiz = async (id: string) => {
    const aQuiz = await Quiz.findById(id);
    return aQuiz ? quizToSchema(aQuiz) : null;
};
