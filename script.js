const data = [];

function generateRandomObject(id) {
  const address = {
    street: faker.address.streetName(),
    suite: faker.address.secondaryAddress(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    geo: {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    },
  };

  const company = {
    name: faker.company.companyName(),
    catchPhrase: faker.company.catchPhrase(),
    bs: faker.company.bs(),
  };

  return {
    id,
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    address,
    phone: faker.phone.phoneNumber(),
    website: faker.internet.url(),
    company,
  };
}

for (let i = 1; i < 100; i++) {
  data.push(generateRandomObject(i));
}

const table = new Tabulator("#example-table", {
  data,
  layout: "fitColumns",
  columns: [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Username", field: "username" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Address", field: "address.street" },
    { title: "Homepage", field: "website" },
    { title: "Company", field: "company.name" },
  ],
});
