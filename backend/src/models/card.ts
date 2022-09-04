import { Document, Schema, model, Types } from 'mongoose';
import { Quiz } from './quiz';

export interface ICard extends Document {
    term: string;
    answer: string;
    quiz: {
        type: Types.ObjectId;
        ref: string;
    };
}

const cardSchema = new Schema<ICard>({
    term: { type: String, required: true },
    answer: { type: String, required: true },
    quiz: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
    },
});

export const Card = model<ICard>('Card', cardSchema);
