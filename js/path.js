const homepageFunc = (() => {
    return {
        firstFunc: () => {

            const lunchBtn = document.getElementById('lunch-btn')
            const dinnerBtn = document.getElementById('dinner-btn')
            const pageback = document.getElementById('pageback')
            const path = window.location.pathname
        
            switch(path) {
                case '/':
                    lunchBtn.addEventListener('click', () => {
                        return window.location.href = '/sp-lunch.html';
                    })
                    dinnerBtn.addEventListener('click', () => {
                        return window.location.href = '/sp-dinner.html'
                    })
                break;
                
                case '/sp-lunch.html':
                    pageback.addEventListener('click', () => {
                    window.location.href = 'http://127.0.0.1:5500/'
                })
                break;
        
                case '/sp-dinner.html':
                    pageback.addEventListener('click', () => {
                    window.location.href = 'http://127.0.0.1:5500/'
                })
                break;
        
                default:
                break;
            }
        }
    }
})()