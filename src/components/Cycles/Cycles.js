import React from "react";

 class Cycles extends React.Component {
    constructor(props) {
        super(props);

        console.log('constructor');
        
        this.state = {
            pageTitle: "Home"
        }
    }

    componentDidMount() {
    // Этот метод позволяет мне монтировать элементы по своему усмотрению. В данном случае 
    // я присвоил название title страницы 'My name of page' (вместо 'React App second homework').
    // Это отработало один раз в constructor и теперь всякий раз при открытии сайта будет
    // выполняться мой сценарий вместо дефолтного сценария получения title из HTML.
    // И сколько бы я не менял значение title в componentDidUpdate всякий раз после перезагрузки
    //  возвращается присвоенное мной название title станицы. 
    // Я мог здесь смонтировать обработчик событий на нужный мне элемент и при наступлении 
    // события выполнялись бы нужные мне действия. 

        document.title = this.state.pageTitle
        console.log('component did mount')
    }

    componentDidUpdate() {
    // Этот метод позволяет перемонтировать страницу при изменении (в нашем случае) значения
    // pageTitle в state. При этом по консолям видно, что constructor  уже не выполняется, а  
    // выполняются: componentDidUpdate, render и return. 
        document.title = this.state.pageTitle
        console.log('component did update')
    }

    componentWillUnmount(){
    // Этот метод позволяет размонтировать элементы убрать и обработчики событий, которые я
    // ранее смонтировал в componentDidUpdate. Вызывается перед удалением элемента из DOM.
    }

    render() {
        console.log('render');
        return(
            <div>
                <p>Page Title={this.state.pageTitle}</p>
                <button onClick={() => this.setState({pageTitle: 'Users'})}>Change title</button>
                <button onClick={() => this.setState({pageTitle: 'Home'})}>Home</button>
            </div>
        )
    }
}

export default Cycles