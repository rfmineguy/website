function count_words() {
	const textarea = document.getElementById('input-area');
	if (textarea.value.length == 0) return 0;
	let words = textarea.value.split(' ');
	return words.length;
}

document.getElementById('count-words-btn').addEventListener('click', () => {
	let count = count_words();
	document.getElementById('word-count-output').innerText = count;
});
