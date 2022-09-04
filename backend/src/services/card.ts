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

export const deleteCard = async (cardId: string) => {
    const aCard = await Card.findById(cardId);
    if (!aCard) {
        return null;
    }
    const quizId = aCard.quiz;
    const aQuiz = await Quiz.findById(quizId);
    if (!aQuiz) {
        return null;
    }
    aQuiz.cards = aQuiz.cards.filter((id) => {
        return id.toString() !== cardId;
    });
    await aQuiz.save();
    await Card.deleteOne({ _id: cardId });
    return quizId.toString();
};

export const editCard = async (
    cardId: string,
    term?: string,
    answer?: string,
) => {
    const aCard = await Card.findById(cardId);
    if (!aCard) {
        return null;
    }
    aCard.term = term ? term : aCard.term;
    aCard.answer = answer ? answer : aCard.answer;
    aCard.save();
    return aCard.quiz.toString();
};
