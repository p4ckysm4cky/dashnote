// ts-node ./src/scripts/test.ts
import 'dotenv/config';
import mongoose from 'mongoose';
import { newQuiz, fetchAllQuiz, fetchSpecificQuiz } from '../services/quiz';
import { newCard } from '../services/card';

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

function testNewCard(quizId: string, term: string, description: string) {
    newCard(quizId, term, description).then((card) => {
        console.log(card);
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

testNewCard('63143a064af5a62491327ab1', 'Card term', 'Card description');
