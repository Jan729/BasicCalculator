// JavaScript source code

//wait for html and css to finish loading
window.onload = function () {
    var buttons = document.getElementById('buttons');
    var clear = document.getElementById('clearButton');
    var ans = document.getElementById('ans');

    //add 1 event listener to the whole parent element, buttons

    //wait until an li is clicked 
    //'e' returns event properties
    buttons.addEventListener('click', function(e) {
        //console.log(e.target); //print button properties to console

        if (e.target.nodeName === 'LI') {
            console.log('button clicked!');

            var val = e.target.innerHTML; //get the value stored in the li


            if (val === '=') {
                //evaluate expression using eval()
                //eval() evaluates a string expression

                //to catch user input errors, print error statment to output window
                //There's gotta be a better way to communicate input errors, but for
                //learning purposes this is okay
                try {
                    var answer = eval(ans.innerHTML);
                    ans.innerHTML = Math.round(answer * 100000000) / 100000000;
                } catch (e) {
                    console.log(e);
                    ans.innerHTML = Error;
                }

            } else {
                ans.innerHTML += val; //add that val to the display
            }

        }

    });

    clear.addEventListener('click', function (e) {
        ans.innerHTML = '';
    });

};
