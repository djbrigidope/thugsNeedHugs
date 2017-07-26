function countVowels(input){
	var vowelCount = input.length;
	return vowelCount;
}
console.log(countVowels('highthere'));

console.assert(countVowels('banana') === 3, "countVowels('banana') did not return 6.");

console.log(countVowels('highthere2'));
console.log(countVowels('highthere3'));
console.log(countVowels('highthere4'));
console.log(countVowels('highthere5'));
console.log(countVowels('highthere6'));


console.assert(countVowels('aeiou') === 5, "countVowels('aeiou') did not return 5.");
console.log('end');
