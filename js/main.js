var bookname=document.getElementById('bookname')
var url=document.getElementById('url')
var btn1=document.getElementById('btn1')
var btn3=document.getElementById('btn3')
var arrayname=[]
var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

if(localStorage.getItem("detalies") != null){
    arrayname=(JSON.parse(localStorage.getItem('detalies')))
    display()
}


btn1.addEventListener('click', add)
function add(){
    // var testt=console.log(arrayname.includes(bookname.value))
    var ex=expression.test(url.value)
    // console.log(ex)
    // console.log(testt)
    if(ex==true){
            var arrayobject={
                websitename:bookname.value,
                websiteurl:url.value,
            }
            arrayname.push(arrayobject)
            localStorage.setItem('detalies',JSON.stringify(arrayname))
            display()
            clear() 
    }else{
        alert("url is not falied") 
    }
    clear()

}
function display(){
    data=``
    for(var i=0 ;i<arrayname.length; i++)
    {
        data+=`
        <tr id="demo">
        <td> ${i+1}</td>

        <td>${arrayname[i].websitename}</td>
       <td>
            
            <a href=${arrayname[i].websiteurl} target="_blank">
            <button id="btn2" class="btn btn-info" ><i class="fa-solid fa-eye pe-2"></i> visit</button>
            </a>
            
        </td>
        <td>
            <button onclick="deletee(${i})" id="btn3" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> delete</button>
        </td

        </tr>
    
        `
    }
    document.getElementById('demo').innerHTML=data
}
function clear(){
    bookname.value=""
    url.value=""
}
function deletee(i){
    arrayname.splice(i,1)
    localStorage.setItem('detalies',JSON.stringify(arrayname))
    display()
}




