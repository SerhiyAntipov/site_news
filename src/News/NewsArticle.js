import React from 'react';
import './NewsArticle.css';

class NewsArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsDataBase: '',
            newsDataBaseLenght: ''
        }
    }

    // State from parent to child  using  function 'getDerivedStateFromProps(props, state)'
    static getDerivedStateFromProps(props, state) {
        return ({
            newsDataBase: props.newsDataBase
        })
    }

    render() {
        return (
            this.props.newsDataBase.map((data, i) => (
                <article className="news-article " key={i}>
                    <a className="news-article__title" href={this.state.newsDataBase[i].url}><h4>{this.state.newsDataBase[i].title}</h4></a>
                    <div className="news-article__content">
                        <a className="news-article__urlToImage" href={this.state.newsDataBase[i].url}><img src={this.state.newsDataBase[i].urlToImage} alt="news img" /></a>
                       <div className="news-article__text-content">
                            <p className="news-article__description">{this.state.newsDataBase[i].description}</p>
                            <p className="news-article__author">Author: {this.state.newsDataBase[i].author}</p>
                            <a className="news-article__btn-read-more btn btn-secondary" href={this.state.newsDataBase[i].url}>Read More</a>
                       </div>
                       <div className="clear"></div>
                    </div>
                </article>
            ))
        )
    }
}

export default NewsArticle;