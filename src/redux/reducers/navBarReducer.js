const navBarContentData = {
    brand: {
        title: 'Software Developer',
    },
    menuList:{
        home:{
            title: 'Home'
        },
        aboutMe:{
            title: 'About me'
        },
        projects: {
            title: 'Projects'
        },
        letsTalk: {
            title: 'Let\'s talk'
        }
    }
}

export default function navBarReducer(state= navBarContentData, action){
    switch (action.type){
        default:
            return state
    }
}