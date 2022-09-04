import { Card, ICard } from '../models/card';
import { Quiz } from '../models/quiz';
import { HydratedDocument } from 'mongoose';
import { cardToSchema } from '../mappers/cardMapper';
import { Card as CardSchema } from '../resolvers/resolvers-types';

export const newCard = async (
    quizId: string,
    term: string,
    answer: string,
): Promise<CardSchema | null> => {
    const quiz = await Quiz.findById(quizId);
    if (quiz === null || quiz === undefined) {
        return null;
    }
    const aCard: HydratedDocument<ICard> = new Card({
        term,
        answer,
        quiz: quiz._id,
    });
    const savedCard = await aCard.save();
    quiz.cards;
    quiz.cards = quiz.cards.concat(savedCard._id);
    await quiz.save();
    return cardToSchema(savedCard);
};
