const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    sendData('https://example.com', data); 
  } catch (error) {
    console.log('Ошибка получения данных:', error);
  }
}

const sendData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const responseData = await response.json();
    console.log('Отправленные данные:', responseData);
  } catch (error) {
    console.log('Ошибка отправки данных:', error);
  }
}

const form = document.querySelector('.login-form');
const username = document.getElementById('username');
const pass = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = {
    login: username.value,
    password: pass.value
  };

  sendData('https://jsonplaceholder.typicode.com/posts', user)
    .then(() => {
      console.log('Данные успешно отправлены');
    });
});

getData('https://example.com/db.json'); 