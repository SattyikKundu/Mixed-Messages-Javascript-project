const {workplace_advice, financial_advice, health_advice} = require('./advice-arrays.js');

// Function to return a random Index for an array
const getRandIndex = (array) => {
    let randIndex = Math.floor(Math.random() * array.length);
    return randIndex;
}

// Generate 3 random Indexes
let randIndex_workplace = getRandIndex(workplace_advice);
let randIndex_financial = getRandIndex(financial_advice);
let randIndex_health    = getRandIndex(health_advice);

// 3 random advices object
let random_advices = {
    workplace_advice: workplace_advice[randIndex_workplace],
    financial_advice: financial_advice[randIndex_financial],
    health_advice:    health_advice[randIndex_health]
};

// Array to store final output to print
let output = [];

// Store all 3 random advice output string into output array via for-loop
for (advice in random_advices) {
    switch(advice) {
        case 'workplace_advice':
            output.push(`Workplace advice 🏢: ${random_advices[workplace_advice]}`);
        case 'financial_advice':
            output.push(`Financial advice 💰: ${random_advices[financial_advice]}`);
        case 'health_advice':
            output.push(`Health advice 🥗:    ${random_advices[health_advice]}`);
        default:
            output.push('One or more advice quotes is missing...?');
    }
}

// function to format and print 3 random advices stored in output
const formatAndPrint = (output_array) => {
    const formattedOuput = output_array.join('\n');
    console.log(formattedOuput);
}

// Finally, print 3 random advice
formatAndPrint(output);
