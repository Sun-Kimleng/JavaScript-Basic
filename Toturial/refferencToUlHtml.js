const ul = document.querySelector('.people');

const people = ['Eii Eii', 'Leng Leng', 'Ronaldo', 'Messi'];

let html = '';

people.forEach((person)=>{
    //create html template

    html += `<li style="color: red">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;