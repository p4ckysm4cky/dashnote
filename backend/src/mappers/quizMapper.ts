import { IQuiz } from '../models/quiz';
import { ICard } from '../models/card';
import { Quiz as SchemaQuiz } from '../resolvers/resolvers-types';
import { cardToSchema } from './cardMapper';

export const quizToSchema = (quiz: IQuiz, cards?: ICard[]): SchemaQuiz => {
    return {
        id: quiz._id.toString(),
        name: quiz.name,
        description: quiz.description,
        cards: cards
            ? cards.map((card) => {
                  return cardToSchema(card);
              })
            : [], // Please change at a later date
    };
};
