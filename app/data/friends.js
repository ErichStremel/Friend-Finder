// Data structure that will store the friends data
var friendsArray = [
	{
		name: 'Jon Snow',
		photo: 'https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg',
		scores: [
			'1',
			'5',
			'5',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Walter White',
		photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Walter_White2.jpg/220px-Walter_White2.jpg',
		scores: [
			'2',
			'4',
			'1',
			'1',
			'1',
			'1',
			'1',
			'2',
			'1',
			'5'
		]
	},
	{
		name: 'Jesse Pinkman',
		photo: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/98/Season_4_-_Jesse.jpg/revision/latest/scale-to-width-down/350?cb=20110620212155',
		scores: [
			'4',
			'3',
			'5',
			'1',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1'
		]
	},
	{
		name: 'Cersei Lannister',
		photo: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/cersei-lannister-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
		scores: [
			'5',
			'1',
			'2',
			'1',
			'3',
			'4',
			'1',
			'3',
			'3',
			'4'
		]
	},
	{
		name: 'Ned Stark',
		photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Ned_Stark-Sean_Bean.jpg/220px-Ned_Stark-Sean_Bean.jpg',
		scores: [
			'1',
			'1',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'1'
		]
	},
	{
		name: 'Teddy Flood',
		photo: 'https://pbs.twimg.com/profile_images/788391403168600064/GFhPXfDv_400x400.jpg',
		scores: [
			'1',
			'1',
			'5',
			'1',
			'3',
			'2',
			'5',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Dolores Abernathy',
		photo: 'data:image/jpeg;base64,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',
		scores: [
			'5',
			'4',
			'4',
			'2',
			'4',
			'4',
			'3',
			'2',
			'3',
			'3'
		]
	},
	{
		name: 'Man in Black',
		photo: 'https://pixel.nymag.com/imgs/daily/vulture/2016/10/21/21-westworld-man-in-black.w700.h700.jpg',
		scores: [
			'5',
			'2',
			'3',
			'1',
			'5',
			'1',
			'3',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Saul Goodman',
		photo: 'http://www.essential.tv/images/uploads/characters/160124152151_662864541.jpeg',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},
	{
		name: 'Michael Scott',
		photo: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png',
		scores: [
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1'
		]
	}
];

module.exports = friendsArray;