function isPalindrome(word) {
    let compare = '';
    console.log(word.length);
  for (let i = (word.length)-1; i >= 0; i -= 1) {
    compare+=word[i];
  }

  if (word === compare) {
    console.log(word + ' é um palíndromo.');
    console.log(compare);
    return true;
  } else {
    console.log(word + ' não é um palíndromo.');
    console.log(compare);
    return false;
  }
}
isPalindrome('ovo');
isPalindrome('raio');
isPalindrome('arara');