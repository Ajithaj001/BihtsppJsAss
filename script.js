// var counter = 1;
// var textBox = "";
// var addList = document.getElementById("addList")
// function addbox()
// {
//     var div = document.createElement("div");
//     div.setAttribute("class","addone");
//     div.setAttribute("id","box_"+counter);

//     textBox = '<label></label><input type="checkbox" class="checkTick"> name="firstans[]" id="firstans'+counter+'" class="firstAnswer"><input type="button" value="delete answer" name="button2">'

//     div.innerHTML = textBox;
//     addList.appendChild()
// }

// var buttonClick = $("#addanswerbutton")

// buttonClick.click(function() {
//     newRowAdd =
//         '<label></label>' +
//         '<input type="checkbox" class="checkTick">' +
//         '<input type="text" name="firstans" id="firstans" class="firstAnswer" placeholder="type your answer">' +
//         '<input type="button" value="delete answer" name="button2">';

//     $('#newinput').append(newRowAdd);
//     alert("hello")

// });

var inp = document.querySelector("#newinput")

function handleClick() {
    newRowAdd =
        '<br/>' +
        '<br/>' +
        '<label></label>' +
        '<input type="checkbox" class="checkTick">' +
        '<input type="text" name="firstans" size="45" id="firstans" class="firstAnswer" placeholder="type your answer">' +
        '<a href="#" id="deleteAnswer"  onClick="deleteOutput()" ><i  class="deleteLink" ></i></i>Delete answer </a>';

    // inp.append(newRowAdd);
    inp.innerHTML = inp.innerHTML + newRowAdd
        // console.log(inp.innerHTML);

}

// function deleteOutput(){
//     //    const element = newRowAdd.querySelector("newinput");
//     //   while(element.hasChildNodes()){
//     //    element.removeChild(element.firstChild)

//    }
// }
var count = 0;

function deleteOutput() {
    // alert("hello") 
    var inp = document.querySelector("#newinput")

    newRowAdd =
        '<br/>' +
        '<br/>' +
        '<label></label>' +
        '<input type="checkbox" class="checkTick">' +
        '<input type="text" name="firstans"  id="firstans"  class="firstAnswer" placeholder="type your answer">' +
        '<a href="#" id="deleteAnswer" onClick="deleteOutput()"><i  class="deleteLink" ></i></i>Delete answer </a>';

    const len = inp.innerHTML.length - newRowAdd.length;
    // console.log(len);
    // console.log("curren length" + inp.innerHTML.length)
    // console.log("lines rem" + newRowAdd.length);

    let newHTML = inp.innerHTML.slice(0, len + 3 + count);
    // console.log(newHTML)
    inp.innerHTML = newHTML;
    count++;
    //    while (element.hasChildNodes()){
    //        element.removeChild(element.firstChild);
    //    }
    // const element = document.getElementById("newinput");
    // element.remove();

}


// second part js

var inpTwo = document.querySelector("#secondInput")

function seconndDelete() {
    newSecondRow =
        '<br/>' +
        '<br/>' +
        '<label></label>' +
        '<input type="checkbox" class="checkTick">' +
        '<input type="text" name="secondans" size="45" id="secondans" class="secondAnswer" placeholder="type your answer"></input>' +
        '<a href="#" id="deleteAnswerTwo" onclick="deleteSecondOutput()"><i  class="deleteLinkTwo" ></i>Delete answer </a>';

    inpTwo.innerHTML = inpTwo.innerHTML + newSecondRow


}

var count = 0;

function deleteSecondOutput() {
    var inpTwo = document.querySelector("#secondInput")
    newSecondRow =
        '<br/>' +
        '<br/>' +
        '<label></label>' +
        '<input type="checkbox" class="checkTick">' +
        '<input type="text" name="secondans" size="45" id="secondans" class="secondAnswer" placeholder="type your answer"></input>' +
        '<a href="#" id="deleteAnswerTwo" onclick="deleteSecondOutput()"><i  class="deleteLinkTwo" ></i>Delete answer </a>';
    const leng = inpTwo.innerHTML.length - newSecondRow.length;

    let secondHTML = inpTwo.innerHTML.slice(0, leng + 20 + count);
    inpTwo.innerHTML = secondHTML;
    count++;

}