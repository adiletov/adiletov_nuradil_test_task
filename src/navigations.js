import knowldj from './assets/knowledje.png';
import apps from './assets/apps.png';
import people from './assets/people.png';
import client from './assets/client.png';
import active from './assets/active.png';
import settings from './assets/settings.png';

export const navigations = [
    {
        name: 'База знаний',
        path: '/',
        icon: knowldj
    },
    {
        name: 'Заявки',
        path: '/applications',
        icon: apps
    },
    {
        name: 'Сотрудники',
        path: '/staff',
        icon: people
    },
    {
        name: 'Клиенты',
        path: '/clients',
        icon: client
    },
    {
        name: 'Активы',
        path: '/active',
        icon: active
    },
    {
        name: 'Настройки',
        path: '/settings',
        icon: settings
    },

]