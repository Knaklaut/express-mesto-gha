[![Tests](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-13-sprint.yml/badge.svg)](https://github.com/Knaklaut/express-mesto-gha/actions/workflows/tests-13-sprint.yml) [![Tests](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/Knaklaut/express-mesto-gha/actions/workflows/tests-14-sprint.yml)

# Проект Mesto: бэкенд

## О сайте
Mesto - интерактивный сайт, работающий по принципу сервиса Instagram и позволяющий просматривать фотографии на странице пользователя.Функционал сайта включает загрузку информации о пользователе, включая имя, строку "О себе" и аватар, а также создание и удаление фотографий в альбоме с возможностью проставления на них лайков. Реализована регистрация и аутентификация пользователей.

Данный проект направлен на создание серверной части (бэкенда).

[Ссылка](https://knaklaut.github.io/react-mesto-auth/index.html) на сайт на GitHub Pages.

## Функциональность
При создании бэкенда задействованы технологии:
* JavaSceipt (REST API)
* Node.js (пакет express)
* MongoDB.

## Структура проекта
* app.js - основной файл, в котором монтируется сервер, происходит подключение роутера и базы данных
* controllers/ - директория, которая содержит функции, описывающие возможные действия с профилями пользователей (users.js) и карточек (cards.js)
* models/ - директория, которая содержит объекты, описывающие модели пользователя (user.js) и карточки (card.js)
* routes/ - директория, в которой содержатся перечни роутов для пользователей (users.js) и карточек (cards.js)

## Планы по доработке
В дальнейшем планируется связать frontend и backend сайта, реализовать регистрацию и аутентификацию пользователей за счет обмена и хранения токенов на сервере. 

## Запуск проекта
`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload
