import React from "react";;
import ReactDOM from "react-dom";
import Blog from "./app/components/Blog";
import WelcomModal from "./app/components/WelcomModal";
import "./app/styles/style.css";

class App extends React.Component {
    render() {
        const article = [
            {title: "Lorem Ipsum", disc: "The post about Lorem Ipsum", postBody: "Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!"},
            {title: "Lorem Ipsum", disc: "The post about Lorem Ipsum", postBody: "Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!"},
            {title: "Lorem Ipsum", disc: "The post about Lorem Ipsum", postBody: "Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!"},
            {title: "Lorem Ipsum", disc: "The post about Lorem Ipsum", postBody: "Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!"},
            {title: "Lorem Ipsum", disc: "The post about Lorem Ipsum", postBody: "Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!"},
        ];

        return (
            <div>
                <Blog posts={article} />
                <WelcomModal />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));