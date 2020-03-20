const axios = require("axios");

axios.get("https://api.covid19api.com/summary")
    .then(({ data }) => {
        const date = new Date(Date.parse(data.Date));
        console.log("Stand: %s.%s.%d %s:%s\n",
            date.getDate().toString().padStart(2, '0'),
            (date.getMonth() + 1).toString().padStart(2, '0'),
            date.getFullYear(),
            date.getHours().toString().padStart(2, '0'),
            date.getMinutes().toString().padStart(2, '0'));

        console.table(process.argv[2] === '--country'
            ? data.Countries.filter(country =>
                process.argv.slice(3).includes(country.Country))
            : data.Countries);
    })
    .catch(error => console.error(error));
