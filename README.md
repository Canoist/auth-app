### Задача:

Реализовать приложение с авторизацией. В качестве фреймворка использвать next js + typescript.

Развернуть проект командой: `npx create-next-app@latest --ts --use-npm`

### Бэк:

https://ns-auth.herokuapp.com/ (по ссылке доступна документация)

### Список дефолтных роутов:

-   `/login`
-   `/dashboard`
-   `/admin`

### По правам пользователей:

-   `/login` - недоступна для авторизованных пользователей.
-   `/dashboard` - доступна обыкновенному пользователю и админу
-   `/admin` - доступна только админу

### Контент на странице:

-   `/login` - сверстать форму с полями: email, password и кнопкой сабмита (для успешной аутентификации под админом используйте: `admin@g.com admin`, под пользователем - `user@g.com user`).
-   `/dashboard` - вывести в виде карточек название локаций доступных по эндпоинту `/locations`.
    Добавить на каждую карточку кнопку, которую видит только админ, на кнопку повесить событие алерта с айдишником локации
-   `/admin` - заполнить любой однотипной информация на ваше усмотрение

### По логике авторизации:

При успешной авторизации - перебросить на страницу `/dashboard`.  
При неуспешной авторизации - вывести ошибку под формой

### Требования:

-   Паттерн аутентификации - любой (csr, ssr)
-   Токен хранится в куках
-   Авторизация не должна сбрасываться после перезагрузки страницы
-   Не должно происходить флешинга контента при попытке перейти на приватную страницу
-   Роуты должны быть защищены и разделены по ролям
-   Оформление на ваше усмотрение
-   При необходимости разрешается использование сторонних библиотек

### Результат опубликовать на GitHub
