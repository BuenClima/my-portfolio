const footerContentData = {
    icons: {
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
        list: {
            github: {
                title: 'GitHub',
                url: 'https://github.com/BuenClima'
            },
            facebook: {
                title: 'Facebook',
                url: 'https://www.facebook.com/diego.buenclima'
            },
            linkedIn: {
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/diego-mart%C3%ADn-hern%C3%A1ndez-a41229170/'
            },
            google: {
                title: 'Google',
                url: ''
            }
        }
    },
    index:{
        title: 'INDEX',
        list: {
            home: {
                title: 'Home',
                url: '#home'
            },
            aboutMe: {
                title: 'About me',
                url: '#aboutMe'
            },
            projects: {
                title: 'Projects',
                url: '#projects'
            },
            letsTalk: {
                title: 'Let\'s talk!',
                url: '#letsTalk'
            }
        }
    },
    contact: {
        title: 'CONTACT',
        address: 'Las Palmas de Gran Canaria',
        phone: '34 606 289 622',
        mail: 'diegomh@protonmail.com'
    },
    newsLetter: {
        title: 'NEWSLETTER',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus',
    },
    rights: {
        message: '© 2021 Diego Martín Hernández. All rights reserved.'
    }
}

export default function footerReducer(state= footerContentData, action){
    switch (action.type){
        default:
            return state
    }
}