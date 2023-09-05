function get_middle(word) {
    const text_len = word.length;
    const middle_word = Math.floor(text_len/2);
    if (text_len % 2 === 0 ) {
        return word[middle_word - 1] + word[middle_word];
    } else {
        return word[middle_word];
    }
    }


    module.exports = get_middle;