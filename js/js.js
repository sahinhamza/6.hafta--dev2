function newElement(){
    let ekleme = document.querySelector("#task")
    if (ekleme.value==false){
        $("#liveToast2").toast('show')
    }
    else{
        let liste = document.querySelector("ul#list")
        let lis = [...liste.getElementsByTagName('li')]    
        for(let i = 0; i<lis.length; i++){
            if (lis[i].innerHTML===ekleme.value){
                $("#liveToast3").toast('show')
                break
            }
            else{
                if (i == lis.length-1){
                let liDOM = document.createElement("li")
                liDOM.innerHTML=ekleme.value
                liste.append(liDOM)
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



