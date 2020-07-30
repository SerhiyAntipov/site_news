import React from 'react';
import './News.css';
import NewsArticle from './NewsArticle';

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsDataBase: '',
        }
    }

    componentDidMount() {
        this.getFetchData()
    }
    // Access-Control-Allow-Origin: https://developer.mozilla.org
    // getting database from API
    getFetchData = () => {
        fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=592b2b12920a4e7eb867f8406e9a0ce8')
            .then(data => {
                return data.json();
            })
            .then(data => {
                data = data["articles"];
                this.setState({
                    newsDataBase: data
                })
            })
    }

    render() {
        if (this.state.newsDataBase) {
            return (
                <section className='news container'>
                    <h2 className="section-title">News</h2><NewsArticle newsDataBase={this.state.newsDataBase} />
                </section>
            )
        } else {
            return (
                <section className='news container'>
                    <h2 className="section-title load-news-database">Load News Database...</h2>
                </section>
            )
        }
    }
}

export default News;