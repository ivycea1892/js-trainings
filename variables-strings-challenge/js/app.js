// 1. Declare variables and capture input.
let noun = prompt('Provide a noun: ');
let adj = prompt('Provide an adjective: ');
let verb = prompt('Provide a verb: ');

// 2. Combine the input with other words to create a story.
const storyMsg = `<p>There once was a ${noun} who would ${verb} so ${adj} daily.</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = storyMsg;