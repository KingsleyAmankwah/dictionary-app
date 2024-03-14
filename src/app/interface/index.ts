// export interface Word {
//   word: string;
//   meanings: {
//     partOfSpeech: string;
//     definitions: {
//       [key: string]: {
//         definition: string;
//       };
//     };
//     synonyms: string;
//   };

//   example: string;
//   synonyms: string;
//   sourceUrls: string;
//   phonetics: {
//     [key: string]: {
//       text: string;
//       audio: string;
//     };
//   };
// }

interface License {
  name: string;
  url: string;
}

interface Phonetic {
  audio: string;
  text?: string;
  sourceUrl: string;
  license?: License;
}

interface Definition {
  definition: string;
  synonyms: string;
  antonyms: string;
  example?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Word {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string[];
  phonetic: string;
}
