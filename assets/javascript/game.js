var game = {
	wordBank: ['Abaddon', 'Alchemist', 'Ancient Apparition', 'Anti Mage', 'Arc Warden', 'Axe', 'Bane', 'Batrider', 'Beastmaster', 'Bloodseeker', 'Bounty Hunter', 'Brewmaster', 'Bristleback'],
	wins: 0,

	pickWord: function(){
		this.currentWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
	},

	play: function(){
		this.pickWord();
		console.log(this.currentWord);
	}
}