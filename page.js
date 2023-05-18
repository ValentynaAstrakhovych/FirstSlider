const entities = [
    {
      city: "Halifax",
      area: "81 m2",
      time: "3.5 months",
      img:'images/halifax.png',
    },
    {
      city: "Houston",
      area: "105 m2",
      time: "4 months",
      img: 'images/houston.png'
    },
    {
      city: "Austin",
      area: "93 m2",
      time: "3 months",
      img: 'images/austin.png'
    }
  ]
  
  
  /*search*/
  
  const city = document.querySelector('.projects-completed__characteristic-city')
  const area = document.querySelector('.projects-completed__characteristic-area')
  const time = document.querySelector('.projects-completed__characteristic-time')
  const img = document.querySelector('.projects-image')
  
  
  const setEntity = (index) => {
    city.innerText = entities[index].city
    area.innerText = entities[index].area
    time.innerText = entities[index].time
    img.style.backgroundImage = `url(${entities[index].img})`
  }
  
  const prev = document.querySelector('.arrow-left')
  const next = document.querySelector('.arrow-right')
  
  const pointSelector= document.querySelector(".dots-navigation_item")
  const citySelector = document.querySelector(".projects-navigation__list__item")
   
  
  let currentIndex = 0;
  
  prev.addEventListener('click', () => {
    if(currentIndex <= 0){
    currentIndex = entities.length - 1;
    } else {
    currentIndex -= 1; 
    }
    setEntity(currentIndex);
  })
  next.addEventListener('click', () => {
    if(currentIndex > entities.length-2){
    currentIndex = 0;
    } else {
    currentIndex += 1; 
    }
    setEntity(currentIndex);
  })