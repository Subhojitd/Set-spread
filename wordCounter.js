function countWords(text) {
    const words = text.split(" ");
    const map = new Map([...new Set(words)].map(word => [word, words.filter(w => w === word).length]));
    return map;
  }
  
  const text = "I am liking the classes of Full Stack Web development very very  much. The teachers are excellent and the mentors are so helping nature ";
  const wordCount = countWords(text);
  console.log(wordCount);
  