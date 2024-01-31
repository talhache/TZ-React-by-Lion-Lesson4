import React from "react";;
import ReactDOM from "react-dom";
import Blog from "./app/components/Blog";
import WelcomModal from "./app/components/WelcomModal";
import "./app/styles/style.css";

class App extends React.Component {
    render() {
        const article = [
            {id:"1", title: "Lorem Ipsum", disc: "The post about Lorem Ipsum", postBody: "Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us! Udja jdjr dh i dbrajhd bde kejt ifnjtoajdn nftad grgdjr ithduh jlfri; hfrufh ", date: "December 23, 2023 by ", author: "Adam"},
            {id:"2", title: "Lorem Ipsum", disc: "The post about Lorem Ipsum", postBody: "Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us! Hdanjef jfbrkjsaf jksadnejf kstgjdjt nawd kb. Jjrkaoj frasdk rgndaerydl isfjr uajsd kalsdien!", date: "December 23, 2023 by", author: " Adam"},
            {id:"3", title: "Lorem Ipsum", disc: "The post about Lorem Ipsum", postBody: "Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us! Hdanjef jfbrkjsaf jksadnejf kstgjdjt nawd kb. Jjrkaoj frasdk rgndaerydl isfjr uajsd kalsdien!", date: "December 23, 2023 by", author: " Adam"},
            {id:"4", title: "Lorem Ipsum", disc: "The post about Lorem Ipsum", postBody: "Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us! Hdanjef jfbrkjsaf jksadnejf kstgjdjt nawd kb. Jjrkaoj frasdk rgndaerydl isfjr uajsd kalsdien!", date: "December 23, 2023 by", author: " Adam"},
            {id:"5", title: "Lorem Ipsum", disc: "The post about Lorem Ipsum", postBody: "Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us!Lorem Ipsum is very nice text, for work with dev exemples.Thanks guys who make that for us! Hdanjef jfbrkjsaf jksadnejf kstgjdjt nawd kb. Jjrkaoj frasdk rgndaerydl isfjr uajsd kalsdien!", date: "December 23, 2023 by", author: " Adam"},
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