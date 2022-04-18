// listeye yeni eleman ekleme
function newElement(){
    let ekleme = document.querySelector("#task")
    if (ekleme.value==false){
        $("#liveToast2").toast('show')
    }
    else{
        let liste = document.querySelector("ul#list")
        let lis = [...liste.getElementsByTagName('LI')] 
        for(let i = 0; i<lis.length; i++){
            if (lis[i].innerText===`${ekleme.value}\n×`){
                $("#liveToast3").toast('show')
                break
            }
            else{
                if (i == lis.length-1){
                let liDOM = document.createElement("LI")
                liDOM.innerHTML=ekleme.value
                liste.append(liDOM)

                var span = document.createElement("SPAN");
                var txt = document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                liDOM.appendChild(span)

                let close = document.getElementsByClassName("close");
                for (let i = 0; i < close.length; i++) {
                    close[i].onclick = function() {
                    let div = this.parentElement;
                    div.style.display = "none";
                    }
                }




                $("#liveToast1").toast('show')
                break
                }
                else{
                    continue
                }
            }
        }
    }   
}

// listedeki eleman yapıldı yapılmadı kontrolu
let list = document.querySelector("ul#list");
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// listeden iş silme çarpısı
let mylist = document.getElementsByTagName("LI");
for (let i = 0; i < mylist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}


// listeden iş silme
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}


