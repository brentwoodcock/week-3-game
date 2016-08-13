var game = {
	wordBank: ['abaddon', 'alchemist', 'ancient apparition', 'anti mage', 'arc warden', 'axe', 'bane', 'batrider', 'beastmaster', 'bloodseeker', 'bounty hunter', 'brewmaster', 'bristleback', 'broodmother', 'centaur warrunner', 'chaos knight', 'chen', 'clinkz', 'clockwerk', 'crystal maiden', 'dark seer', 'dazzle', 'death prophet', 'disruptor', 'doom', 'dragon knight', 'drow ranger', 'earth spirit', 'earthshaker', 'ember spirit', 'enchantress', 'enigma', 'faceless void', 'gyrocopter', 'huskar', 'invoker', 'io', 'jakiro', 'juggernaut', 'keeper of the light', 'kunkka', 'legion commander', 'leshrc', 'lich', 'lifestealer', 'lina', 'lion', 'lone druid', 'luna', 'lycan', 'magnus', 'medusa', 'meepo', 'mirana', 'morphling', 'naga siren'],
	answer: '',
	characters: [],
	displayedWord: [],
	guesses: [],
	numGuesses: 12,
	isWin: false,
	wins: 0,

	pickWord: function(){
		this.answer = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
		this.characters = this.answer.split('');
		for (i in this.characters){
			if (this.characters[i] == ' '){
				this.displayedWord[i] = ' ';
			}else{
				this.displayedWord[i] = '_';
			}
		}
	},

	checkGuess: function(userGuess){
		if (this.characters.indexOf(userGuess) == -1){
			this.numGuesses--;
			this.guesses.push(userGuess);
		}else{
			for (i in this.characters){
				if (this.characters[i] == userGuess){
					this.displayedWord[i] = userGuess;
				}
			}
		}
	},

	checkWin: function(){
		if (this.displayedWord.indexOf('_') == -1){
			this.isWin = true;
			this.wins++;
			this.reset();
		}else if(this.numGuesses == 0){
			this.isWin = false;
			this.reset();
		}
	},

	reset: function(){
		this.characters = [];
		this.displayedWord = [];
		this.guesses = [];
		this.numGuesses = 12;
		this.pickWord();
	}
}