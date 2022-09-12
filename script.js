const base_url = "https://www.superheroapi.com/api.php/1353353655402736"
const newHeroButton = document.getElementById('newHeroButton')
const herImageDiv = document.getElementById('newHero')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById("searchInput")
const heroNameDiv=document.getElementById("heroName")
const heroDetailsDiv=document.getElementById("heroDetails")
const getSuperHero = (id,name) => {
  //search =base_url/search/heroname
  //above search retuns an object containing resultsarray in which first element is id so code=json.results[0].image.url
  //id=base_url/id
  fetch(`${base_url}/${id}`)
    .then(response => response.json())
    .then(json => {
      showHeroInfo(json)
    })
}
const showHeroInfo=(character)=>{
  //Object.keys(OBJECT_NAME) function that returns arrays that cointains all keys not values ,so we can finally apply map to that array
  const name = `<h2>${character.name.toUpperCase()}</h2>`
  const img=`<img src='${character.image.url}'/>`
  const array=Object.keys(character.powerstats)
  console.log(array)
 
  const stats = array.map(stats=>{
    return `<p>${stats.toUpperCase()}  :${character.powerstats['intelligence']}</p>`
  }) .join('')
    
    //herImageDiv.innerHTML = `${name}${img}${stats}`
    herImageDiv.innerHTML=`${img}`
    heroNameDiv.innerHTML=`${name}`
    heroDetailsDiv.innerHTML=`${stats}`
  
  return stats
  
  
}
const getSearchSuperHero = (name) => {
  fetch(`${base_url}/search/${name}`).then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      showHeroInfo(hero)
    })
}
const randomHero = () => {
  const numberOfHero = 731;
  return Math.floor(Math.random() * numberOfHero) + 1;
}
newHeroButton.onclick = () => getSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(searchInput.value)
