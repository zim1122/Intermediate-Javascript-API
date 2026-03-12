const firstName = 'Kamruzzaman';
const lastName = "Shuvo";


const aboutMe = `My name is ${firstName}`;
const giveMe = `give me money ${(10+20)*2+500}`
console.log(aboutMe);
console.log(giveMe);

const fullName = firstName+' '+lastName;
const fullName2= `${firstName} ${lastName}`;
console.log(fullName);
console.log(fullName2);

function getCardHTML(name,description,price){
    const div =`
    <div class="card">
        <h2>${name.toUpperCase()}</h2>
        <p>Price: ${price}</p>
        <p>${description}</p>
    </div>
    `;
    console.log(div);
}
getCardHTML('Iphone 14 Pro Max','This is the latest model of Iphone',150000);
