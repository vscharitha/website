const express = require("express");
const app = express();

app.use(express.json());

app.route("/bfhl").post((req, res) => {
  const data = req.body.data || [];
  const numbers = [];
  const alphabets = [];
  let highest_lowercase_alphabet = ""; // To track the highest lowercase alphabet

  for (const item of data) {
    if (!isNaN(item)) {
      // If the item is a number
      numbers.push(item);
    } else if (item.length === 1 && isNaN(item)) {
      // If the item is a single character and not a number
      alphabets.push(item);
      if (item >= 'a' && item <= 'z') {
        // Check if the character is a lowercase letter
        if (
          !highest_lowercase_alphabet ||
          item > highest_lowercase_alphabet
        ) {
          highest_lowercase_alphabet = item; // Update if it's the highest so far
        }
      }
    }
  }

  res.json({
    is_success: true,
    user_id: "charitha",
    email: "charitha.21bce7116@vitapstudent.ac.in",
    roll_number: "21BCE7116",
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});