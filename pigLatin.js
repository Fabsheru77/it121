function translateToPigLatin(sentence) {
    function Vowel(char) {
            const vowels = 'aeiou';
        return vowels.includes(char);
    }

    const words = sentence.split(' ');
    const pigLatinWords = words.map(word => {
        if (Vowel(word[0])) {
            return word + 'way';
        } else if (!Vowel(word[0]) && Vowel(word[1])) {
            return word.slice(1) + word[0] + 'ay';
        } else {
            return word.slice(2) + word.slice(0, 2) + 'ay';
        }
    });

            return pigLatinWords.join(' ');
}

const inputSentence = "apple pig grade";
const result = translateToPigLatin(inputSentence)
console.log("Pig Latin translation:", result);
