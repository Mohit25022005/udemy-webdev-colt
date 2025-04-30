const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit',function(e){
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;
    addTweet(username,tweet);
   
    
})
const addTweet = (username,tweet)=>{
    const newTweet  = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet)
}