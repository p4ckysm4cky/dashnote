import { ICard } from '../models/card';
import { Card as SchemaCard } from '../resolvers/resolvers-types';

export const cardToSchema = (card: ICard): SchemaCard => {
    return {
        id: card._id.toString(),
        term: card.term,
        answer: card.answer,
    };
};
