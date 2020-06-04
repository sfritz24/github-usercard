/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// console.log(axios);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'sfritz24',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'garybot'
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card"> ------ card
      <img src={image url of user} /> ------profileImg
      <div class="card-info"> ------cardInfo
        <h3 class="name">{users name}</h3> ------name
        <p class="username">{users user name}</p> ------userName
        <p>Location: {users location}</p> ------location
        <p>Profile: ------profile
          <a href={address to users github page}>{address to users github page}</a> ------profileLink
        </p>
        <p>Followers: {users followers count}</p> ------followers
        <p>Following: {users following count}</p> ------following
        <p>Bio: {users bio}</p> ------bio
      </div>
    </div>
*/

const cardPlacement = document.querySelector('.cards');

function cardMaker(data){

  //creating elements
  const card = document.createElement('div');
  const profileImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  //end of new elements

  //nesting elements
  card.appendChild(profileImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  //end nesting

  //adding classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  //end class

  //set attributes
  profileImg.setAttribute('src', `${data.avatar_url}`);
  profileLink.setAttribute('href', `${data.html_url}`);
  //end attributes

  //text content
  name.textContent = `${data.name}`;
  userName.textContent = `${data.login}`;
  location.textContent = `${data.location}`
  profile.textContent = 'Profile:';
  profileLink.textContent = `${data.html_url}`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;
  //end text content

  //have to append this after adding text content
  profile.append(profileLink);
  //end of link append

  return card;
};

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function getProfiles(username){
  axios.get(`https://api.github.com/users/${username}`)
  .then(response =>{
    // console.log(`this is my response`, response)
    const userData = response.data
    const profileCard = cardMaker(userData)
    cardPlacement.appendChild(profileCard)
  })
  .catch(error =>{
    console.log(`this is the error`, error)
  })
};

getProfiles(followersArray[0])
getProfiles(followersArray[1])
getProfiles(followersArray[2])
getProfiles(followersArray[3])
getProfiles(followersArray[4])
getProfiles(followersArray[5])
getProfiles(followersArray[6])