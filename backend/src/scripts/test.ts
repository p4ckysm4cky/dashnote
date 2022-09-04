import 'dotenv/config';
import mongoose from 'mongoose';
import { newQuiz } from '../services/quiz';
// ts-node ./src/scripts/test.ts

const url = process.env.MONGODB_URI;

function testNewQuiz() {
    newQuiz('Hello World', 'Description here').then(() => {
        console.log('newQuiz ran');
    });
}

mongoose
    .connect(url!)
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });

mongoose.connection.close();
