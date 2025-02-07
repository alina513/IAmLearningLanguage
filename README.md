IamLearningLanguages

IamLearningLanguages is a website designed to help users find teachers who can assist them in learning a desired language.

Technologies Used:
React, Redux, Firebase, react-hook-form, react-hot-toast, react-modal, redux-persist, styled-components, react-loader-spinner.

Application Structure:
The app consists of three pages:

Home Page:
Displays a list of company benefits and includes a call-to-action link. This link redirects authorized users to the Teachers page, while unauthorized users are shown a login modal.
Teachers Page:
Contains a list of teachers that users can filter based on the language of instruction, the student proficiency level they work with, and the hourly lesson price.
Favorites Page (Private Page):
Displays the list of teachers that the user has added to their favorites.
Authentication & Database:
Using Firebase Authentication, the app supports:

User registration & login
Fetching current user data
User logout
The registration/login form is implemented using react-hook-form and yup for validation. All fields are required.
The modal window containing the form can be closed:

By clicking the close button (styled as an “X”),
By clicking on the backdrop,
By pressing the Esc key.
The Realtime Database (Firebase) stores a collection of teachers with the following fields:
name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience.

Teacher Cards & Interactions:
Teacher cards are displayed according to the design mockup.
On the Teachers Page, only 4 cards are initially rendered, with additional cards loaded by clicking the "Load More" button.
Clicking the heart-shaped button adds the teacher to the Favorites list (stored in localStorage) and changes the button color.
Clicking the heart button again removes the teacher from favorites, reverting the button color.
Clicking "Read more" expands the card, displaying additional details and student reviews.
Clicking "Book trial lesson" opens a modal window with a trial lesson booking form.
This form also uses react-hook-form and yup for validation.
All fields are required.
Design Mockup:
Figma Design Link
https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/%D0%9F%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D0%9A%D0%A6?type=design&node-id=0-1&mode=design&t=jCmjSs9PeOjObYSc-0





Сайт IamLearningLanguages створений для пошуку вчителів, які допоможуть людині вивчити потрібну мову

В роботі використовувалися React, Redux, FireBase, react-hook-form, react-hot-toast,react-modal, redux-persist, styled-components, react-loader-spinner.

 Застосунок складається з 3х сторінок:
• сторінка “Home” з переліком переваг компанії та посиланням, що закликає розпочати роботу з застосунком і перенаправляє на сторінку “Teachers” для авторизованого користувача і відкриває модальне вікно для логінізації для неавторизованого. 
• сторінка “Teachers”, що містить перелік викладачів, які користувач може фільтрувати за мовою викладання, за рівнем знань учнів, з якими працює викладач та ціною за годину заняття.
• приватна сторінка “Favorites” з викладачами, які були додані користувачем в “обрані”

 За допомогою firebase_DB додані до застосунку можливість авторизації (реєстрація, логінізація, отримання даних про поточного користувача, логаут).
Форма для реєстрації/авторизації та  валідацію її полів реалізована за допомогою react-hook-form & yup.  Всі поля є обовʼязковими до заповнення. Модальне вікно з формою  закривається по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop  або натисканню на клавішу Esc.
 В Realtime Database (by firebase) створена колекція викладачів з наступними полями: name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience 
Відповідно до макету реалізувати картку з описом характеристик викладача. 
На сторінці “Teachers”  рендеритися 4 картки, а їх решту можна завантажити по кліку на кнопку Load more.
У разі кліку по кнопці у вигляді “серця” картка  додається до списку обраних (за допомогою localStorage),  а колір кнопки - “серця” змінюється.
 У разі повторного кліку по кнопці у вигляді “серця” картка повинна бути видалена зі списку обраних,  а колір кнопки змінитись до початкового стану. 
У разі кліку по кнопці  Read more картка  розкривається з більш детальною інформацією про викладача та відгуками від його учнів.
У разі кліку по кнопці Book trial lesson відкривається модальне вікно з формою для бронювання пробного заняття. Форму та валідація її полів  реалізована за допомогою react-hook-form & yup. Всі поля обовʼязкові до заповнення.

Макет: https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/%D0%9F%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D0%9A%D0%A6?type=design&node-id=0-1&mode=design&t=jCmjSs9PeOjObYSc-0