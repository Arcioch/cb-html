let loader = document.getElementsByClassName('loader')[0];
let apiURL = 'https://api.apixu.com/v1/forecast.json?key=3983b588d2f240aea4282620191004&days=7&q=';

let cityForm = document.getElementById('get-city');

//funckja pojazująca kręciołek
function showLoader() {
    loader.classList.add('show');
}


//funkcja krywająca kręciołek
function hideLoader() {
    loader.classList.remove('show');
}

//wysetl dzisiejszy dzien na podstawie danych z api i umieść do w html
function showCurrentDayWether(current) {
    let html = '';
    html += '<h2>Dzisiejsza pogoda dla Londynu</h2>';
    html += '<div class="day">';
    html += '<div class="right">';
    html += '<img src="' + current.condition.icon + '" alt="" />';
    html += '</div>';
    html += '<div class="left">';

    html += '<div class="param">';
    html += '<div class="name">Temperatura</div>';
    html += '<div class="value">' + current.temp_c + '</div>';
    html += '</div>';

    html += '<div class="param">';
    html += '<div class="name">Ciśnienie</div>';
    html += '<div class="value">' + current.pressure_mb + '</div>';
    html += '</div>';

    html += '</div>';
    html += '</div>';


    document.getElementById('current-day').innerHTML = html;
}

// funkcja wczytujaca dane do api
function loadDataFromApi(city = 'London') {
    showLoader();
    let currentApiURL = apiURL + city;

    axios({
        method: 'GET',
        url: currentApiURL
    }).then(function (response) {
        hideLoader();
        let dataApi = response.data;
        showCurrentDayWether(dataApi.current);
    })
}


cityForm.addEventListener('submit', function (event) {
    let cityName = document.getElementById('city').value;

    if (cityName != "") {
        loadDataFromApi(cityName);
    }
    event.preventDefault();
})