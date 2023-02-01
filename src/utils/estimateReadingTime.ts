export type EstimateReadingTime = (
  text: string,
  wordsPerMinute?: number
) => number;

export const estimateReadingTimeInMinutes: EstimateReadingTime = (
  text: string,
  wordsPerMinute: number = 200
): number => {
  // Split the text into a list of words
  const words = text.split(" ");

  // Calculate the number of words in the text
  const numWords = words.length;

  // Calculate the reading time in minutes
  const readingTime = numWords / wordsPerMinute;

  // Return the reading time as an integer
  return Math.ceil(readingTime);
};
