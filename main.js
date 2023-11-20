let test = document.querySelector('.content')
let datas = []
var innerhtml = document.getElementById("Value_input")
var checkinput = document.querySelector(".CheckInput");
// đây là hàm thêm, giờ em đã có điều kiện check rồi thì phải nghĩ cách
//// nhấn vào nó thyuh-ì nó sẽ xún cái thằng mà cần sửa chứ ko phải thêm xún dưới.
// và để làm đc điều đó thì cần gì /*  rồi em suy nghĩ đi */
// set một attirbute gọi cái attirbute nếu nó = undifex thì sẽ gang mang[i] = index.html
// lang nghe su kien 
var Listen = () => {
    if (innerhtml == '') {
        alert("Nhập Lại Thông Tin");
    } else {
        const classid = checkinput.getAttribute("class");// goi classid la name cua class input 
        if (classid == "CheckInput") {  // ktr neu classid ko phai la checkinput  thi se la them 
            let ss22 = innerhtml.value
            let sss = {
                title: ss22
            }
            datas.push(sss)
            innerhtml.value = ''
            handleRender(datas)
            console.log('sss222', datas)
        } else if (classid != "CheckInput") { // neu classid ko phai la checkinput thi se la add 
            console.log("a")
            datas[classid].title = innerhtml.value;
            checkinput.setAttribute("class", "CheckInput") // va set lai attribue = checkinput
            handleRender(datas)
        }

    }
}
// render 
const handleRender = (data) => {
    console.log(data);
    let ul = '<ul>'
    data.forEach((e, index) => {
        console.log('ssss', e)
        ul = ul + `
        <li>${e.title}</li>
        <button onclick="handleTest(${index})">Delete</button>
        <button onclick="btnedit(${index})">Edit</button>
        `
    })
    ul += '</ul>'
    test.innerHTML = ul

}
// chinh sua 
const btnedit = (id) => {
    innerhtml.value = datas[id].title
    checkinput.setAttribute("class", id);
    // tao ra mot 
}
// xoa 
const handleTest = (id) => {
    datas.splice(id, 1)
    console.log('đã xóa khỏi mảng', datas)
    handleRender(datas)
}
