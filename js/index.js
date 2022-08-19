// localStorage
let myDutylist = [];
let Dutylist = [...document.getElementsByTagName("LI")];

for (let i = 0; i < Dutylist.length; i++) {
  myDutylist.push(Dutylist[i].innerText)
  localStorage.setItem('myDuty', JSON.stringify(myDutylist));
}

// add new todo
function newElement() {
  let add = document.querySelector("#task")
  if (add.value == false) {
    $("#liveToast2").toast('show')
  }
  else {
    let list = document.querySelector("ul#list")
    let list_ = [...list.getElementsByTagName('LI')]
    for (let i = 0; i < list_.length; i++) {
      // Do not add the same todo to the list twice
      if (list_[i].innerText === `${add.value}\n×`) {
        $("#liveToast3").toast('show')
        break
      }
      else {
        if (i == list_.length - 1) {
          let liDOM = document.createElement("LI")
          liDOM.innerHTML = add.value
          list.append(liDOM)

          // localStorage
          myDutylist.push(add.value)
          console.log(myDutylist)
          localStorage.setItem('myDuty', JSON.stringify(myDutylist));

          let span = document.createElement("SPAN");
          let txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          liDOM.appendChild(span)

          let close = document.getElementsByClassName("close");
          for (let i = 0; i < close.length; i++) {
            close[i].onclick = function () {
              let div = this.parentElement;
              div.style.display = "none";
            }
          }

          $("#liveToast1").toast('show')
          break
        }
        else {
          continue
        }
      }
    }
  }
}

// check for the to-do if it done or not
let list = document.querySelector("ul#list");
list.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);


// clear todo cross
let mylist = document.getElementsByTagName("LI");
for (let i = 0; i < mylist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}


// clear todo
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";

  }
}

