import React from 'react';
import sage from '../assets/proj/sage-jordan.png'
import carSales from '../assets/proj/car-sales.png'
import github from '../assets/proj/github-usercards.png'
import shoppingCart from '../assets/proj/react-shopping-cart.png'
import darkMode from '../assets/proj/dark-mode.png'
import nasa from '../assets/proj/nasa-potd.png'
import design from '../assets/proj/design_your_life.png'

const ProjectData = [
    {
        id: 1,
        image: sage,
        header: 'Template Portfolio',
        meta: <a href='https://github.com/sage-jordan/portfolio-website/tree/master'>GitHub Repository</a>,
        description: 'My previous portfolio was made as a project in Lambda School, where they showed us how to explore a template and incorporate and publish my own changes.',
        extra: <a href='https://sage-jordan.now.sh'>sage-jordan.now.sh</a>
    },
    {
        id: 2,
        image: design,
        header: 'Design Your Life',
        meta: <a href='https://github.com/Design-YourLife/FE-design-YourLife'>GitHub Repository</a>,
        description: 'Build Week: Design Your Life prompt. Worked on a team of 5, using Reactjs, Moment, Axios, React-Router-Dom, and Bootstrap. Login/Register functionality. React app talks to backend; CRUD operations on "activities".',
        extra: <a href='https://design-your-life.now.sh/'>https://design-your-life.now.sh/</a>
    },
    {
        id: 3,
        image: nasa,
        header: 'NASA Astronomy Photo Of The Day',
        meta: <a href='https://github.com/sage-jordan/nasa-photo-of-the-day'>GitHub Repository</a>,
        description: 'Module Project: Component Side Effects. This project basically utilizes custom hooks to save data to localStorage and set dark-mode on the body element.',
        extra: <a href='https://nasaphotooftheday.now.sh/'>https://nasaphotooftheday.now.sh/</a>
    },
    {
        id: 4,
        image: shoppingCart,
        header: 'Shopping Cart',
        meta: <a href='https://github.com/sage-jordan/react-shopping-cart'>GitHub Repository</a>,
        description: 'Module Project: Context API. Add and Remove functionality to Cart Context.',
        extra: <a href='https://react-shopping-cart-alpha.now.sh/'>https://react-shopping-cart-alpha.now.sh/</a>
    },
    {
        id: 5,
        image: carSales,
        header: 'Car Sales',
        meta: <a href='https://github.com/sage-jordan/Car-Sales'>GitHub Repository</a>,
        description: 'Module Project: Redux. This project uses redux to add and remove features from your car, and update the total price accordingly.',
        extra: <a href='https://car-sales-omega.now.sh/'>https://car-sales-omega.now.sh/</a>
    },
    {
        id: 6,
        image: github,
        header: 'Github UserCard',
        meta: <a href='https://github.com/sage-jordan/React-Github-User-Card'>GitHub Repository</a>,
        description: 'Module Project: Component Lifecycle Methods. A single page React website that calls the GitHub API and displays Semantic UI Cards of my profile, and my friends` profiles.',
        extra: <a href='sage-jordan.now.sh'>sage-jordan.now.sh</a>
    },
    {
        id: 7,
        image: darkMode,
        header: 'Dark Mode',
        meta: <a href='https://github.com/sage-jordan/dark-mode'>GitHub Repository</a>,
        description: 'Module Project: Composing Stateful Logic. This project basically utilizes custom hooks to save data to localStorage and set dark-mode on the body element.',
        extra: <a href='https://dark-mode.sagemjordan.now.sh/'>https://dark-mode.sagemjordan.now.sh/</a>
    },
]

export default ProjectData;