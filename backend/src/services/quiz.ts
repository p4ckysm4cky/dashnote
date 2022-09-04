import { Quiz, IQuiz } from '../models/quiz';
import { HydratedDocument } from 'mongoose';
import { quizToSchema } from '../mappers.ts/quizMapper';
import { Quiz as QuizSchema } from '../resolvers/resolvers-types';

export const newQuiz = async (
    name: string,
    description: string,
): Promise<void> => {
    const aQuiz: HydratedDocument<IQuiz> = new Quiz({
        name,
        description,
        cards: [],
    });
    await aQuiz.save();
};

export const fetchAllQuiz = async (): Promise<QuizSchema[]> => {
    const quizArray = await Quiz.find({});
    const returnArray = quizArray.map((quiz) => quizToSchema(quiz));
    return returnArray;
};

export const fetchSpecificQuiz = async (id: string) => {
    try {
        const aQuiz = await Quiz.findById(id);
        return quizToSchema(aQuiz!);
    } catch (e) {
        console.log(e);
        return null;
    }
};
