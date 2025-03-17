import {workplace_advice, financial_advice, health_advice} from './advice-arrays.js';

// Function to return a random Index for an array
const getRandIndex = (array) => {
    let randIndex = Math.floor(Math.random() * array.length);
    return randIndex;
}

// Generate 3 random Indexes
let randIndex_workplace = getRandIndex(workplace_advice);
let randIndex_financial = getRandIndex(financial_advice);
let randIndex_health    = getRandIndex(health_advice);

