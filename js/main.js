document.querySelector('#fetchPicture').addEventListener('click', getFectch)

function getFectch(){
    
    const userInput = document.querySelector('#day').value
    
    const url = (`https://api.nasa.gov/planetary/apod?api_key=dvsId7MeKJdmbT1iEownyuPSj4LDFHJuJZkK07S3&date=${userInput}`)

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        if(data.media_type === 'video'){
        document.querySelector('#pictureName').innerText = data.title
        document.querySelector('iframe').src = data.url
        document.querySelector('#description').innerText = data.explanation
        document.querySelector('#productImage').classList.add('hidden')
        document.querySelector('iframe').classList.toggle('hidden')

        }else if(data.media_type === 'image'){
        document.querySelector('#pictureName').innerText = data.title
        document.querySelector('#productImage').src = data.hdurl
        document.querySelector('#description').innerText = data.explanation
        document.querySelector('#productImage').classList.toggle('hidden')
        document.querySelector('iframe').classList.add('hidden')
        }


        
        
        
    })

    .catch(err =>{
        console.log(`error ${err}`)
    })
}
