# ТЕСТЫ 
 ### для запуска тестов нужно

*  *сменить деррикторию с **react-ui-server**  на **react-ui-server/react-webpack*** 

*  *установить зависимости **npm install***

* *запустить тесты **npm run test***
```
 react-ui-server\react-webpack\src\redux\tests
  модульные тесты проверяющие работу акшенов(actionc) и санок(thunc)
```

тестов пока написал мало в ближайшие пару дней напишу остальные модульные и интеграционные 


# ПЛАГИН ДЛЯ ПОИСКА НЕИСПОЛЬЗУЕМЫХ ФАЙЛОВ

### для запуска плагина нужно

*  *сменить деррикторию с **react-ui-server**  на **react-ui-server/server*** 

*  *установить зависимости **npm install***

* *запустить плагин **npm run build***

в папке  **react-ui-server\react-webpack** создастся файл **superfluousFiles.jsx**

в котором будет лежать массив путей до неиспользуемых файлов

Сам  плагин находится **react-ui-server\react-webpack\src\plugin.jsx** (FileListPlugin)


# REACT ПРИЛОЖЕНИЕ 

### для запуска приложения нужно

*  *сменить деррикторию с **react-ui-server**  на **react-ui-server/react-webpack*** 

*  *установить зависимости **npm install***

*  *запустить тесты **npm run start*** 

приложение запустится на http://localhost:3001


# СЕРВЕР

### для запуска сервера нужно

*  *сменить деррикторию с **react-ui-server**  на **react-ui-server/server*** 

*  *установить зависимости **npm install***

*  *запустить тесты **npm run start*** 

сервер запустится на http://localhost:3000


В каждом запросе к бэкенду нужно передавать специальный токен в заголовке Authorization 

(например, Authorization: Bearer eyjhbgcioijiuzi1niisi,


 где "eyjhbgcioijiuzi1niisi" — это токен).
 
 
  Получить токен можно на страничке https://shri.yandex/hw. Для этого нужно залогиниться через GitHub.