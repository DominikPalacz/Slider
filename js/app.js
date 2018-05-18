document.addEventListener('DOMContentLoaded', function () { //console.log('DOM ok');

    var btnNext = document.getElementById('nextPicture'); //console.log(btnNext);
    var btnPrev = document.getElementById('prevPicture'); //console.log(btnPrev);
    var allElUl = document.getElementsByTagName('li'); //console.log(allElUl); //arr

    var indexImg = 0;

    //for (var i = 0; i < allElUl.length; i++) {
    //    console.log(allElUl[ indexImg ]);
    //    indexImg++;
    //}

    allElUl[indexImg].classList.add('visible'); //console.log(allElUl[indexImg]);

    btnNext.addEventListener('click', function () {
        //console.log('click Next');

        allElUl[indexImg].classList.remove('visible');
        indexImg++;
        //console.log(indexImg);

        (indexImg >= allElUl.length) ? indexImg = 0 : null;

        allElUl[indexImg].classList.add('visible');


    });

    btnPrev.addEventListener('click', function () {
        //console.log('click Prev');

        allElUl[indexImg].classList.remove('visible');
        indexImg--;
        //console.log(indexImg);

        (indexImg < 0) ? indexImg = allElUl.length - 1 : null;

        allElUl[indexImg].classList.add('visible'); // index work ok only between 1-6

    });


});