// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.

function countVowels2(word: string): number {
    const vowels: string[] = ["a", "e", "i", "o", "u"]
    const wordArray = word.toLowerCase().split("")
    let count: number = 0

    wordArray.forEach((char: string) => {
        if (vowels.includes(char)) {
            count++
        }
    })
    return count
}
//include() need to set lib:"es2016" to tsconfig


function countVowels(word: string): number {
    const vowels: string[] = ["a", "e", "i", "o", "u"]
    const wordArray = word.toLowerCase().split("").filter(letter => vowels.includes(letter)).length

    return wordArray
}


// Expected output:
console.log(countVowels("hello"));    // 2
console.log(countVowels("typescript"));// 2