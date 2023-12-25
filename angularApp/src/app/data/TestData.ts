import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {
    static categories: Category[] = [
        {id: 1, title: 'Работа'},
        {id: 2, title: 'Семья'},
        {id: 3, title: 'Учеба'},
        {id: 4, title: 'Отдых'},
        {id: 5, title: 'Спорт'},
        {id: 6, title: 'Еда'},
        {id: 7, title: 'Финансы'},
        {id: 8, title: 'Гаджеты'},
        {id: 9, title: 'Здоровья'},
        {id: 10, title: 'Автомобили'},
    ]

    static priorities: Priority[] = [
        {id: 1, title: 'Низкий', color: '#fff'},
        {id: 2, title: 'Средний', color: '#fff'},
        {id: 3, title: 'Высокий', color: '#fff'},
        {id: 4, title: 'Очеь срочно', color: '#fff'},
    ]

    static tasks: Task[] = [
        {id: 1, title: 'Залить бензин полный бак', category: TestData.categories[0], priority: TestData.priorities[0], completed: false, date: new Date('2023-11-29')},
        {id: 2, title: 'Сделать отчеты', category: TestData.categories[0], priority: TestData.priorities[2], completed: false, date: new Date('2023-12-11')},
        {id: 3, title: 'Сходить в парк', category: TestData.categories[0], priority: TestData.priorities[3], completed: true, date: new Date('2021-10-29')},
        {id: 4, title: 'Пригласить друзей', category: TestData.categories[0], priority: TestData.priorities[1], completed: true, date: new Date('2020-08-09')},
    ]
}
