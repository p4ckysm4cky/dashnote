import { Quiz, IQuiz } from '../models/quiz';
import { HydratedDocument } from 'mongoose';

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

export const fetchAllQuiz = async (): Promise<IQuiz[]> => {
    const notes: Array<IQuiz> = await Quiz.find({});
    return notes;
};
