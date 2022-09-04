import 'dotenv/config';
import mongoose from 'mongoose';
import { newQuiz, fetchAllQuiz, fetchSpecificQuiz } from '../services/quiz';
// ts-node ./src/scripts/test.ts

const url = process.env.MONGODB_URI;

function testNewQuiz(name: string, description: string) {
    newQuiz(name, description).then((quiz) => {
        console.log(quiz);
    });
}

function testFetchAllQuiz() {
    fetchAllQuiz().then((array) => {
        console.log(array);
    });
}

function testFetchSpecificQuiz(id: string) {
    fetchSpecificQuiz(id).then((quiz) => {
        console.log(quiz);
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
