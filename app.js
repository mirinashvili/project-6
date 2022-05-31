// slider

let data = [
    {
        id: 1,
        imageUrl: 'https://static.wikia.nocookie.net/littleeinsteinspedia/images/f/f1/Altai_Mountains.jpg/revision/latest?cb=20210205013031',
        title: 'Image  1',
        url: 'https://google.com'

    },
    {
        id: 2,
        imageUrl: 'https://www.wallpapers13.com/wp-content/uploads/2015/12/Lake-Mountain-Resort-in-Victoria-about-120km-from-Melbourne-Australia-mountain-with-pine-forest-and-rock-peaks-reflection-2560x1600-1-1920x1440.jpg',
        title: 'Image  2',
        url: 'https://google.com'

    },
    {
        id: 3,
        imageUrl: 'https://youimg1.tripcdn.com/target/100h0r000000h156f574B.jpg?proc=source%2Ftrip',
        title: 'Image  3',
        url: 'https://google.com'
    },
    {
        id: 4,
        imageUrl: 'https://grizzlyrose.com/wp-content/uploads/2018/08/Best-Views-in-Colorado.jpg',
        title: 'Image  4',
        url: 'https://google.com'
    }

    
  
]



let arrowLeft = document.getElementById ('arrow-left-button');
let arrowRight = document.getElementById ('arrow-right-button');
let sliderContent = document.getElementById ('slider-content');
let dotsList = document.getElementsByClassName ('dot');


let sliderIndex = 0;


function createAtag (item) {
    let tag = document.createElement ('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2tag (item) {
    let tagTitle = document.createElement ('h2');
    tagTitle.setAttribute ('class', 'title');
    tagTitle.append (item.title);

    return tagTitle;
}

function creatImgtag (item) {
    let tagImage = document.createElement ('img');
    tagImage.setAttribute ('src', item.imageUrl);
    tagImage.setAttribute ('alt', item.title);

    return tagImage;
}

function createDots (item) {
    let dots = document.createElement ('div');
    dots.setAttribute ('class', 'dots');

    data.forEach ((element) => {
        let dotElement = document.createElement ('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);

        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dotElement);
    });

    console.log (dots);
    return dots;
}

function CurrentDotActivi() {
    dotsList[sliderIndex].classList.add ('active');
}

function setSlide () {
    sliderContent.innerHTML = '';
    let slideItem = createAtag (data [sliderIndex]);
    let h2Tag = createH2tag (data[sliderIndex]);
    let imgTag = creatImgtag (data [sliderIndex]);
    let dots = createDots ();

    slideItem.appendChild (imgTag);
    slideItem.appendChild(h2Tag);

    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActivi();

    console.log(slideItem);
}

arrowLeft.addEventListener('click', arrowleftClick );
arrowRight.addEventListener( 'click', arrowrightClick );
  


function arrowleftClick () {
    if (sliderIndex <= 0) {
        sliderIndex = data.length -1 ;
        setSlide ();
        return;
    } 
    
    sliderIndex -- ;
    setSlide();
}

function arrowrightClick () {
    if (sliderIndex >= data.length -1) {
        sliderIndex = 0;
        setSlide ();
        return;
    }
    
    sliderIndex ++ ;
    setSlide();
}


// setInterval( () => {
//    arrowrightClick ();
// }, 3000);

setSlide();

// poste


let currentPage = 1;
let totalPages;


function getUsers(page) {
    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response);

        var fragment = document.createDocumentFragment();

        responseData.data.forEach(element => {
            let li = document.createElement('li');
            li.classList.add('li-users');

            let img = document.createElement('img');
            img.src = element.avatar;
            img.classList.add('image-class');

            let h3 = document.createElement ('h3');
            h3.textContent = element.first_name  + '  '  +  element.last_name;
            h3.classList.add ('image-title');

            let span = document.createElement('span');
            span.textContent = element.email;
            span.classList.add ('spanText')

            


            li.appendChild(span);
            li.appendChild(img);
            li.appendChild(h3);
            

            fragment.appendChild(li);

        });

        document.getElementById('user-list').innerHTML = ' ';

        document.getElementById('user-list').appendChild(fragment);

        totalPages = responseData.total_pages;
    }

    let requist = new XMLHttpRequest();
    requist.addEventListener('load', render);
    requist.open('GET', 'https://reqres.in/api/users?page=' + page);
    requist.send();
}


document.getElementById('prev').addEventListener('click', function() {

    if (currentPage === 1) {
        return;
    }
    currentPage -= 1;
    getUsers(currentPage);
})

document.getElementById('next').addEventListener('click', function() {

    if (currentPage === totalPages) {
        return;
    }
    currentPage += 1;
    getUsers(currentPage);
})

getUsers(currentPage);


// accordation

let accordition = document.getElementsByClassName('container');

for (let i = 0; i < accordition.length; i++) {
    accordition[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}