import { Quiz, IQuiz } from '../models/quiz';
import { HydratedDocument } from 'mongoose';
import { quizToSchema } from '../mappers/quizMapper';
import { Quiz as QuizSchema } from '../resolvers/resolvers-types';
import { ICard, Card } from '../models/card';
import { deleteCard } from './card';

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
    const aQuiz = await Quiz.findById(id).populate('cards');
    return aQuiz
        ? quizToSchema(aQuiz, aQuiz.cards as unknown as ICard[])
        : null;
};

export const deleteQuiz = async (id: string) => {
    const aQuiz = await Quiz.findById(id);
    if (!aQuiz) {
        return null;
    }
    aQuiz.cards.forEach(async (id) => {
        await Card.deleteOne({ _id: id.toString() });
    });
    await Quiz.deleteOne({ _id: id });
};
