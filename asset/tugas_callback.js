// URL sumber data JSON
let url = 'https://jsonplaceholder.typicode.com/users';

// Fetch data JSON dari URL
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Dapatkan referensi tabel
        let table = document.getElementById("myTable");
        let tbody = table.getElementsByTagName("tbody")[0];

        // Iterasi melalui data JSON dan tambahkan baris ke dalam tabel
        data.forEach(item => {
            let row = tbody.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            cell1.innerHTML = item.id;
            cell2.innerHTML = item.name;
            cell3.innerHTML = item.username;
            cell4.innerHTML = item.email;
            cell5.innerHTML = item.address.street + ", " + item.address.suite + ", "  + item.address.city;
            cell6.innerHTML = item.company.name;
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });

    document.getElementById('myButton').addEventListener('click', function() {
        alert('Data telah tersimpan')
    })