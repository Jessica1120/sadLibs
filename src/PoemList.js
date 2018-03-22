
class Poem {
    constructor(info) {
        this.author = info.author;
        this.title = info.title;
        this.content = info.content;
    }
}

const neverMore = new Poem({author: 'Edgar Allan Poe', title: 'The Raven', content: 'raven'});
const sleeper = new Poem({author: 'Edgar Allan Poe', title: 'The Sleeper', content: 'dear elanore'})
const funeral = new Poem({author: 'Emily Dickinson', title: 'I felt a Funeral, in my Brain', content: 'coffins'})
const PoemList = [neverMore, sleeper, funeral]

export default PoemList;

