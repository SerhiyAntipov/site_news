import React from 'react';
import './News.css';
import NewsArticle from './NewsArticle';

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsDataBase: ''
        }
    }

    componentDidMount() {
        this.getFetchData()
    }

    getFetchData = () => {
        fetch('https://gnews.io/api/v3/top-news?token=96b8f8fb1481c274df907dc097849cc3')
            .then(data => {
                console.log("fetch Response -", data)
                return data.json(); 
            })
            .then(data => {
                console.log("fetch.then - ", data)
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