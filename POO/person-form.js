class Person {

    constructor(name, lastName, birthDate, NIT) {
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.NIT = NIT;
    }

    calcAge () {
        const today = new Date();
        const currentDay = parseInt(today.getDate());
        const currentMonth = parseInt(today.getMonth()) + 1;
        const currentYear = parseInt(today.getFullYear());

        const birthYear = parseInt(String(this.birthDate).substring(0, 4));
        const birthMonth = parseInt(String(this.birthDate).substring(5, 7));
        const birthDay = parseInt(String(this.birthDate).substring(8, 10));

        let age = currentYear - birthYear;
        if (currentMonth < birthMonth) {
            age--;
        } else if (currentMonth === birthMonth) {
            if (currentDay < birthDay) {
                age--;
            }
        }

        return age;

    }

    fullName () {
        return `${this.name} ${this.lastName}`
    }
    
    itsUrBithday () {
        const today = new Date(); 
        const currentDay = parseInt(today.getDate());
        const currentMonth = parseInt(today.getMonth()) + 1;

        const birthMonth = parseInt(String(this.birthDate).substring(5, 7));
        const birthDay = parseInt(String(this.birthDate).substring(8, 10));

        let birth;

        if ((currentDay === birthDay) && (currentMonth === birthMonth)) {
            birth = 'si';
        } else {
            birth = 'no';
        }

        return birth;
    }

}

const form = document.getElementById('form');
const iptName = document.getElementById('ipt-name');
const iptLastName = document.getElementById('ipt-lastName');
const iptBirthDate = document.getElementById('ipt-birthdate');
const iptNIT = document.getElementById('ipt-NIT');
const tbody = document.getElementById('tbody');



form.addEventListener('submit', function send(e) {
    e.preventDefault();


    const nameVal = iptName.value;
    const lastNameVal = iptLastName.value;
    const birthdateVal = iptBirthDate.value;
    const nitVal = iptNIT.value;

    const newGuy = new Person(nameVal, lastNameVal, birthdateVal, nitVal);

    if (birthdateVal) {
        console.log(newGuy.calcAge());
    }

    const fn = newGuy.fullName();

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    tbody.appendChild(tr);
    tr.appendChild(td1).classList.add("bg-green-100");
    tr.appendChild(td2).classList.add("bg-green-100");

    td1.innerText = fn;
    td2.innerText = newGuy.itsUrBithday();

});


