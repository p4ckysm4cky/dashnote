import { Document, Schema, model, Types } from 'mongoose';

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
            ref: 'Card',
        },
    ],
});

export const Quiz = model<IQuiz>('Quiz', quizSchema);
