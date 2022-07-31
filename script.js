

let books = [

];

function read() {
    let htm = ``;

    let i = 0;
    books.forEach(book => {

        htm = htm + `<tr>
                    <td>${book.sno}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.price}</td>
                    <td><button type="button" onclick="openModal('Edit',${i})" class="btn btn-dark">Edit</button></td>
                    <td><button type="button" onclick="remove(${i})" class="btn btn-danger">Delete</button></td>
                        </tr>
                    `
        i = i + 1;
    });
    document.getElementById("tbody").innerHTML = htm;

}

function create() {
    books.push(
        {
            sno: books.length + 1,
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            price: document.getElementById('price').value
        });

    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('price').value = "";

    read();
}



function edit(i) {
    books[i] = {
        sno: books[i].sno,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        price: document.getElementById('price').value
    }
    read();
}

read();

function openModal(type, i = -1) {
    document.getElementById('modal-title').innerHTML = type == 'Add' ? `Add Form` : `Edit Form`;
    document.getElementById('action').onclick = () => { create(); }
    document.getElementById('action').innerHTML = 'Create';
    if (type != 'Add') {
        document.getElementById('title').value = books[i].title;
        document.getElementById('author').value = books[i].author;
        document.getElementById('price').value = books[i].price;
        document.getElementById('action').onclick = () => { edit(i); };
        document.getElementById('action').innerHTML = 'Edit';
    }

    var myModal = new bootstrap.Modal(document.getElementById('addForm'), {});
    myModal.show();
}

function remove(i) {
    delete books[i];
    books.splice(i, 1);
    read();
}
// onclick="edit(${i})"
