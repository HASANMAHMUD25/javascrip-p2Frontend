import React from 'react';

const Todo = () => {
    main()
    return (
        <div>
            <h2>Check in your console</h2>
        </div>
    );
}

// Jangan mengubah apapun pada function main
const main = () => {
    console.log("# Get All Users");
    all()

    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics"
    };
    store(newUser)

    console.log("# Edit User: Isfa")
    const editedUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    }
    update(1, editedUser)

    console.log("# Delete User: Nurul");
    destroy(2)
}


// TODO 1 - Buatlah array of object users (5 users)
// Objek memiliki property: name, age, major
// Gunakan const untuk membuat variabel
const users = [
    {
        name: "Hasan Mahmud",
        age: 18,
        major: "Komputer",
      },
      {
        name: "Asep ",
        age: 23,
        major: "Matematika",
      },
      {
        name: "Peter man",
        age: 22,
        major: "Engineering",
      },
      {
        name: "Sarah",
        age: 21,
        major: "Administrasi Bisnis",
      },
      {
        name: "David Kholik",
        age: 20,
        major: "Hukum",
      },
    ];


// TODO 2 - Membuat function yang menampilkan semua data users
// Gunakan for/for-of
const all = () => {
    for (const user of users) {
        // Tampilkan data user
        console.log(`Nama: ${user.name}`);
        console.log(`Usia: ${user.age}`);
        console.log(`Jurusan: ${user.major}`);
      }
}


// TODO 3 - Membuat function untuk menambahkan data users
// Gunakan metode push
const store = (user) => {
    const newUser = {
        name: "Bard",
        age: 27,
        major: "Machine Learning",
      };
}

// TODO 4 - Membuat function untuk mengupdate data users
// Ganti data users berdasarkan index pada array
const update = (index, user) => {
    const update = (index, user) => {
        // Validasi index
        if (index < 0 || index >= users.length) {
          throw new Error("Index tidak valid");
        }
      
        // Ganti data user di array users
        users[index] = user;
      };
}

// TODO 5 - Membuat function untuk menghapus data users berdasarkan index
// Gunakan metode splice
const destroy = (index) => {
    const destroy = (index) => {
        // Validasi index
        if (index < 0 || index >= users.length) {
          throw new Error("Index tidak valid");
        }
      
        // Hapus data user di array users
        users.splice(index, 1);
      };
}


export default Todo;
