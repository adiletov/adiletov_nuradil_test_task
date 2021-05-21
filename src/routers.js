import React from "react";
const Knowledge = React.lazy(() => import('./container/Knowledge'))
const Applications = React.lazy(() => import('./container/Applications'))
const Clients = React.lazy(() => import('./container/Clients'))
const Staff = React.lazy(() => import('./container/Staff'))
const Active = React.lazy(() => import('./container/Active'))
const Settings = React.lazy(() => import('./container/Settings'))

export const routers = [
    {
        name: 'Knowledge',
        path: '/',
        component: Knowledge
    },
    {
        name: 'Applications',
        path: '/applications',
        component: Applications
    },
    {
        name: 'Clients',
        path: '/clients',
        component: Clients
    },
    {
        name: 'Staff',
        path: '/staff',
        component: Staff
    },
    {
        name: 'Active',
        path: '/active',
        component: Active
    },
    {
        name: 'Settings',
        path: '/settings',
        component: Settings
    },

]