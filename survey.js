const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let solutions = []
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  solutions.push('My name is '+answer)
  rl.question('What\'s an activity you like doing? ', (answer) => {
    solutions.push('An activity I enjoy doing is '+answer)
    rl.question('What do you listen to while doing that? ', (answer) => {
      solutions.push('When I do that I listen to '+answer)
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        solutions.push('My favourite meal is '+answer)
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          solutions.push('For that meal I like to eat '+answer)
          rl.question('Which sport if your absolute favourite? ', (answer) => {
            solutions.push('My favourite sport is '+answer)
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              solutions.push('My super power is '+answer)
              rl.close();
              console.log(solutions.join('. '));
            })
          })
        })
      })
    })
  });
});

