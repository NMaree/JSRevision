const fs = require('fs');
const crypto = require('crypto');
const test = require('ava');

const md5 = (filePath) => {
  if (fs.existsSync(filePath)) {
    const file = fs.readFileSync(filePath);
    const hash = crypto.createHash('md5').update(file).digest('hex');
    return hash;
  } else {
    console.error('Invalid file path');
    return null;
  }
};

console.log('Running feedback check ...');

// get expected feedback file hash
const hash = require('./feedback-hash.json').hash;

// md5 the current feedback file (hopefully updated by students)
const studentFeedbackHash = md5('./feedback.md');

test('feedback file should be changed', t => {
  // if hashes match, the file was not changed
  const feedbackSubmitted = studentFeedbackHash && studentFeedbackHash != hash;

  t.is(feedbackSubmitted, false);
});