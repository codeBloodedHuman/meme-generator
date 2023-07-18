function clearAll() {
    const memeContainer = document.querySelector('.meme-content');
    const jokeContainer = document.querySelector('.joke-content');
    
    memeContainer.innerHTML = '';
    jokeContainer.innerHTML = '';
  }
  
  function showMeme() {
    // Value is a string representing image URL
    const randomMemeUrl = getRandomData('memes');
    const container = document.querySelector('.meme-content');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', randomMemeUrl);
    
    clearAll();
    
    container.appendChild(newImg);
  }
  
  function showJoke() {
    // Value is a string representing the joke
    const randomJokeText = getRandomData('jokes');
    
    const newP = document.createElement('p');
    newP.textContent = randomJokeText;
    
    clearAll();
    
    document.querySelector('.joke-content').appendChild(newP);
  }
  
  
  
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }
  
  const memes = [
	
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-53-300x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-1-300x210.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-54-300x250.png",
    "https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-55-300x269.png",
    "https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-56.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-57.png",
    "https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-58.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-8.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-59.png",
    "https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-66.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/download.jpg",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-12-300x281.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-13-300x281.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-14-240x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-61.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-62.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-17-300x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-18-252x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-19-300x281.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-20-249x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-21-300x233.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-63.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-64.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-24-300x150.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-25-289x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-27.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-52-300x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-30-300x221.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-65.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-32-300x239.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-33-300x181.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-34-300x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-35-300x250.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-36-300x269.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-37-300x210.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-38-300x292.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-39-300x167.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-40-249x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-41-300x294.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-42-300x295.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-43-234x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-44-300x263.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-45-300x255.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-46-300x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-47.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-48-300x210.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-49-249x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-50-300x300.png",
	"https:\/\/www.testbytes.net\/wp-content\/uploads\/2019\/06\/Untitled-51-300x146.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/05\/python",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/2.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/3.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/1.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/4-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/5-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/6-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/7-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/8-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/9-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/10-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/11-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/12-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/13-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/14-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/15-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/16.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/17.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/18.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/19.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/20.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/9-1.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/8-1.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/7.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/3-2.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/6-1.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/Imgur-8801b2-1.png",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/5-1.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/r_389776_tqMPa-1.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/2-2.jpg",
	"https:\/\/www.probytes.net\/wp-content\/uploads\/2018\/01\/4.jpg",'https://i.redd.it/ogyytgglkln51.jpg', 'https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://i.redd.it/iij16swxjie61.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'];
  
  // Sourced from: http://www.devtopics.com/best-programming-jokes/
  const jokes = ['This statement', 'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”', 'There are only 10 kinds of people in this world: those who know binary and those who don’t.', 'All programmers are playwrights, and all computers are lousy actors.', 'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.', 'The generation of random numbers is too important to be left to chance.', 'Debugging: Removing the needles from the haystack.', '“Debugging” is like being the detective in a crime drama where you are also the murderer.', 'There are two ways to write error-free programs; only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'];
  
  // source: https://www.goodreads.com/quotes/tag/programming

  
  // Just a little helper function
  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  
  const data = {
    memes,
    jokes,

  };
  
  