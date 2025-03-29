import { yourName, yourJob, avatarImage, contentItems, nameInput, jobInput, inputPlace, inputSrc, inputAvatar, imageTrash, itemImage } from './constants.js';
import { createCard, likeCounter, deleteCardByOwner} from './card.js';

export function checkResponse(res){
  if (res.ok){
    return res.json();
  }
  return Promise.reject (`Ошибка ${res.status}`);
};

//достаем данные пользователя с сервера
export function getProfileInfo() {
  return fetch('https://nomoreparties.co/v1/apf-cohort-202/users/me', {
    headers: {
      authorization: '625630c2-30de-42cf-a9a3-6e74c582b476'
    }
  })
  .then(checkResponse)
};

//достаем карточки с сервера
export function getCards () {
 return fetch('https://nomoreparties.co/v1/apf-cohort-202/cards', {
  headers: {
    authorization: '625630c2-30de-42cf-a9a3-6e74c582b476'
  }
})
.then(checkResponse)
};

//отправка данных пользователя на сервер
export function sentProfileInfo() {
   return fetch('https://nomoreparties.co/v1/apf-cohort-202/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '625630c2-30de-42cf-a9a3-6e74c582b476',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value,
    })
  })
  .then (checkResponse)
}

//добавление новой карточки
export function sentNewCard() {
  return fetch('https://nomoreparties.co/v1/apf-cohort-202/cards', {
    method: 'POST',
    headers: {
      authorization: '625630c2-30de-42cf-a9a3-6e74c582b476',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: inputPlace.value,
      link: inputSrc.value,
    })
  })
  .then (checkResponse)
};

//отправка нового аватара
export function sentNewAvatar() {
  return fetch('https://nomoreparties.co/v1/apf-cohort-202/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '625630c2-30de-42cf-a9a3-6e74c582b476',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: inputAvatar.value,
    })
  })
  .then (checkResponse)
};

export function deleteCard (id){
  return fetch(`https://nomoreparties.co/v1/apf-cohort-202/cards/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: '625630c2-30de-42cf-a9a3-6e74c582b476',
      'Content-Type': 'application/json'
    },
  })
  .then (checkResponse)
};

//отправка лайка
export function sentLike(newContentItem) {
  return fetch(`https://nomoreparties.co/v1/apf-cohort-202/cards/likes/${newContentItem.id}`, {
    method: 'PUT',
    headers: {
      authorization: '625630c2-30de-42cf-a9a3-6e74c582b476',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    })
  })
  .then (checkResponse)

};
//снятие лайка
export function deleteLike(newContentItem) {
  return fetch(`https://nomoreparties.co/v1/apf-cohort-202/cards/likes/${newContentItem.id}`, {
    method: 'DELETE',
    headers: {
      authorization: '625630c2-30de-42cf-a9a3-6e74c582b476',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    })
  })
  .then (checkResponse)
};
