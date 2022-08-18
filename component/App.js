import html from '../react-redux-clone-lib/core.js'
import { connect } from '../react-redux-clone-lib/store.js'
import Header from '../component/Header.js'
import TodoList from '../component/TodoList.js'
import Footer from '../component/Footer.js'



function App({ todos }) {
    
    return html`
     <section class="todoapp">
        ${Header()}
        ${todos.length > 0 && TodoList()}
        ${todos.length > 0 && Footer()}
     </section>
    `
}

export default connect()(App)