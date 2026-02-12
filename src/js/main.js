import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
    render() {
        return(
            <div>Your app injected to dom correctly</div>
        )
    }
}

chrome.runtime.onMessage.addListener((request, sender, response) => {
    if(request.injectApp) {
        injectApp();
        response({
            startExtension: true,
        });
    }
})

function injectApp() {
    //check if div is already open 
    if (document.getElementById("chromeExtensionReactApp")) return ;

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "chromeExtensionReactApp");
    document.body.appendChild(newDiv);
    ReactDom.render(<App/>, newDiv);

}