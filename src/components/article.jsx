import React from 'react';
import Image1 from '../assets/imagen1.png';
import Image2 from '../assets/imagen2.png';
import './article.css';


function Article() {
    return (
        <html lang="es">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>ARTICLE</title>
            </head>
            <body>
                <h1>New York Times files lawsuit against Microsoft and OpenAI</h1>
                <img src={Image1} alt="img1" width="600" height="400" /> 
                <p>The New York Times, a US news company, filed a lawsuit against Microsoft and OpenAI, the owner of ChatGPT. 
                The lawsuit claims that OpenAI used millions of articles from the New York Times without permission to train ChatGPT, an AI system.    
                The New York Times says that when people ask ChatGPT about current events, the system sometimes gives answers that are from New York Times articles. However, these articles are normally not free. People need to pay for a subscription to read the New York Times.    
                Because people might use ChatGPT to get information from the New York Times for free, the news company could lose money. People will stop paying for subscriptions.
                The lawsuit also mentions Microsoft’s Bing search engine which uses ChatGPT. It claims that Bing might show results from New York Times articles, but not show a link to the New York Times website.
                The New York Times tried to talk to Microsoft and OpenAI in April to solve this problem, but they couldn’t reach an agreement.
                </p>
            </body>
            <body>
                <img src={Image2} alt="img2" width="600" height="400" /> 
                <p>The New York Times, a US news company, filed a lawsuit against Microsoft and OpenAI, the owner of ChatGPT. 
                The lawsuit claims that OpenAI used millions of articles from the New York Times without permission to train ChatGPT, an AI system.    
                The New York Times says that when people ask ChatGPT about current events, the system sometimes gives answers that are from New York Times articles. However, these articles are normally not free. People need to pay for a subscription to read the New York Times.    
                Because people might use ChatGPT to get information from the New York Times for free, the news company could lose money. People will stop paying for subscriptions.
                The lawsuit also mentions Microsoft’s Bing search engine which uses ChatGPT. It claims that Bing might show results from New York Times articles, but not show a link to the New York Times website.
                The New York Times tried to talk to Microsoft and OpenAI in April to solve this problem, but they couldn’t reach an agreement.
                </p>
            </body>
        </html>
    );
}

export default Article;
