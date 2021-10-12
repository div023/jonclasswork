function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}
  
function modelReady(){
    classifier.classify( gotResults);
  }
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      img = document.getElementById('alien1') 
      img1 = document.getElementById('alien2')
      img2 = document.getElementById('alien3')
      img3 = document.getElementById('alien4')
  
      
      if (results[0].label == "Clap") {
        img.src = 'https://img.favpng.com/3/8/15/aliens-cartoon-png-favpng-Dt29tCRYYKDcrZ082EUheHbda.jpg';
        img1.src = 'https://www.pinclipart.com/picdir/middle/335-3354011_evocative-cute-alien-aliens-animation-image-animals-cute.png';
        img2.src = 'https://m.media-amazon.com/images/I/41iaYvW75NL._AC_.jpg';
        img3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfM04x1HRLBjRoWJ9Fd-qLruZZSVVjCoQQfDL_42Qu--Jl3kyK6H-8Rsfmpn2SZ0NywEY&usqp=CAU'
      } else if (results[0].label=="Bell") {
        img.src = 'https://img.favpng.com/3/8/15/aliens-cartoon-png-favpng-Dt29tCRYYKDcrZ082EUheHbda.jpg';
        img1.src = 'https://www.pinclipart.com/picdir/middle/335-3354011_evocative-cute-alien-aliens-animation-image-animals-cute.png';
        img2.src = 'https://m.media-amazon.com/images/I/41iaYvW75NL._AC_.jpg';
        img3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfM04x1HRLBjRoWJ9Fd-qLruZZSVVjCoQQfDL_42Qu--Jl3kyK6H-8Rsfmpn2SZ0NywEY&usqp=CAU'
      } else if (results[0].label == "Snapping") {
        img.src = 'https://img.favpng.com/3/8/15/aliens-cartoon-png-favpng-Dt29tCRYYKDcrZ082EUheHbda.jpg';
        img1.src = 'https://www.pinclipart.com/picdir/middle/335-3354011_evocative-cute-alien-aliens-animation-image-animals-cute.png';
        img2.src = 'https://m.media-amazon.com/images/I/41iaYvW75NL._AC_.jpg';
        img3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfM04x1HRLBjRoWJ9Fd-qLruZZSVVjCoQQfDL_42Qu--Jl3kyK6H-8Rsfmpn2SZ0NywEY&usqp=CAU'
      } else {
        img.src = 'https://img.favpng.com/3/8/15/aliens-cartoon-png-favpng-Dt29tCRYYKDcrZ082EUheHbda.jpg';
        img1.src = 'https://www.pinclipart.com/picdir/middle/335-3354011_evocative-cute-alien-aliens-animation-image-animals-cute.png';
        img2.src = 'https://m.media-amazon.com/images/I/41iaYvW75NL._AC_.jpg';
        img3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfM04x1HRLBjRoWJ9Fd-qLruZZSVVjCoQQfDL_42Qu--Jl3kyK6H-8Rsfmpn2SZ0NywEY&usqp=CAU'
      }
    }
  }