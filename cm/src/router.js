import { createRouter, createWebHashHistory } from 'vue-router';
import TheRadio from './components/TheRadio.vue';
import TheInputs from './components/TheInputs.vue';
import TheSidebar from './components/TheSidebar.vue';
import ThePageHeadings from './components/ThePageHeadings.vue';
import TheCardHeadings from './components/TheCardHeadings.vue';
import TheDescriptionList from './components/TheDescriptionList.vue';
import TheCalendar from './components/TheCalendar.vue';
import TheFeeds from './components/TheFeeds.vue';
import TheTables from './components/TheTables.vue';
import TheForm from './components/TheForm.vue';
import TheSelectMenus from './components/TheSelectMenus.vue';
import TheStackedLists from './components/TheStackedLists.vue';
import TheCheckboxes from './components/TheCheckboxes.vue';
import TheTextAreas from './components/TheTextAreas.vue';
import TheToggles from './components/TheToggles.vue';
import TheRegistration from './components/TheRegistration.vue';
import TheActionPanels from './components/TheActionPanels.vue';
import TestPage from './components/TestPage.vue';



export default createRouter({

    history: createWebHashHistory(),
    routes: [{
            path: '/',
            component: TheInputs
        },
        {
            path: '/radio',
            component: TheRadio
        },
        {
            path: '/sidebar',
            component: TheSidebar
        },
        {
            path: '/pageheadings',
            component: ThePageHeadings
        },
        {
            path: '/cardheadings',
            component: TheCardHeadings
        },
        {
            path: '/descriptionslist',
            component: TheDescriptionList
        },
        {
            path: '/calendar',
            component: TheCalendar
        },
        {
            path: '/feeds',
            component: TheFeeds
        },
        {
            path: '/tables',
            component: TheTables
        },
        {
            path: '/forms',
            component: TheForm
        },
        {
            path: '/selectmenus',
            component: TheSelectMenus
        },
        {
            path: '/stackedlists',
            component: TheStackedLists
        },
        {
            path: '/checkboxes',
            component: TheCheckboxes
        },
        {
            path: '/textareas',
            component: TheTextAreas
        },
        {
            path: '/toggles',
            component: TheToggles
        },
        {
            path: '/registration',
            component: TheRegistration
        },
        {
            path: '/actionpanel',
            component: TheActionPanels
        },
        {
            path: '/testpage',
            component: TestPage
        }


    ]
});

// const routes = [{
//     path: './radio',
//     name: radio,
//     component: TheRadio
// }];

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes
// });

// export default router;