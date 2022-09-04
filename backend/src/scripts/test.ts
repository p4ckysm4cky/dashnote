import 'dotenv/config';
import mongoose from 'mongoose';
import { newQuiz, fetchAllQuiz } from '../services/quiz';
// ts-node ./src/scripts/test.ts

const url = process.env.MONGODB_URI;

function testNewQuiz(name: string, description: string) {
    newQuiz(name, description).then(() => {
        console.log('newQuiz ran');
    });
}

function testFetchAllQuiz() {
    fetchAllQuiz().then((array) => {
        console.log(array);
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

testFetchAllQuiz();

mongoose.connection.close();
