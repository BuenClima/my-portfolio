const parallaxContentData = {
    home : {
        title: 'Home Section',
    },
    aboutMe : {
        title: 'About Me Section',
    },
    projects: {
        title: 'Projects Section',
    },
    letsTalk: {
        title: 'Let\'s Talk! Section',
    }
}
export default function parallaxReducer(state = parallaxContentData, action) {
    switch (action.type) {
        default:
            return state
    }
}
