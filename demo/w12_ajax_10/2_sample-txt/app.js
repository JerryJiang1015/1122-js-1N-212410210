
const btn = document.querySelector('.btn');
console.log('hello');
btn.addEventListener('click', () => {
    getData();
});

function getData() {
    const xhr = new XMLHttpRequest();
    console.log('xhr0', xhr);
    xhr.open('GET','./api/sample.txt');
    xhr.onreadystatechange = function () {
    console.log('xhr0', xhr);
    if (xhr,this.readyState === 4 && xhr.status === 200) {
        const text = document.createElement('p');
        text.textContent = xhr.responseText;
        document.body.appendChild(text);
    } else {
        console.log ({
            status:xhr.status,
            text:xhr.statusText,

        });
    }
};

    xhr.send();
};

