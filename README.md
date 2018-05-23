# basic-react-13-11

##HT1 Реализовать список комментов к статье, который можно открывать/закрывать по нажатию на ссылку, меняя на ней текст

##HT2.1 Написать для всего propTypes
##HT2.2 Вынести функционал аккордеона в декоратор + класс для наследования
##HT2.3 Починить закрытие статьи
##HT2.4 Опционально: реализовать сохранение toggleOpenArticle с помощью мемоизации

##HT3.1 Создать форму для добавления коммента( user, text ), без реального добавления!
##HT3.2 Добавить валидацию: подсвечивать красным если меньше 10 символов имя и 20 текст, не давать ввести больше 100
##HT3.3 Добавить в App календарь(https://github.com/gpbl/react-day-picker) с выбором диапазона дат, отображать этот диапазо текстом

##HT4.1 Вынести состояние фильтров в redux store
##HT4.2 Реализовать фильтрацию статей для ArticleList

##HT5.1 Переписать articles на структуру ключ -> значение
##HT5.2 Создать мидлвару для генерации случайных id
##HT5.3 Реализовать функционал добавления коммента к статье

##HT6.1 Переписать комменты на immutable аналогично сатьям
##HT6.2 Загружать комменты к статье при открытии списка комментов(загружать один раз, показывать лоадер). /api/comment?article=56c782f18990ecf954f6e027

##HT7.1 Реализовать роут для пагинации всех комментов (/comments/...)
##HT7.2 Реализовать пагинацию всех комментов, по 5 на странице, каждую страниц грузить 1 раз(/api/comment?limit=5&offset=5)

##HT8.1 Реализовать локализацию, поместив словарь в контекст
##HT8.2 Починить отображение статьи при переходе на /articles/56c782f18990ecf954f6e027
##HT8.3 подготовить и прислать на почту вопросы к QA встрече