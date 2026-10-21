let score = 25;

if (score >= 26) {
  console.log("High Score");
} else if (score >= 17) {
  console.log("Medium Score");
} else if (score >= 13) {
  console.log("Passing Score");
} else {
  console.log("Low Score");
}

for (let i = 1; i <= 13; i++) {
  console.log("Reading chapter:", i);
}

let danceAttempts = 0;
while (danceAttempts < 17) {
  console.log("Practicing dance trend attempt:", danceAttempts + 1);
  danceAttempts++;
}