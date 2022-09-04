import { Document, Schema, model, Types } from 'mongoose';
import { Card } from './card';

export interface IQuiz extends Document {
    name: string;
    description: string;
    cards: {
        type: Types.ObjectId;
        ref: string;
    }[];
}

const quizSchema = new Schema<IQuiz>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    cards: [
        {
            type: Schema.Types.ObjectId,
            ref: Card, // Modified because populate literally won't run
        },
    ],
});

export const Quiz = model<IQuiz>('Quiz', quizSchema);
