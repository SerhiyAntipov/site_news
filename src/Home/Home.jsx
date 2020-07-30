import React from 'react';
import './Home.css';
import imgArticle01 from './img/unnamed_01.jpg';
import { connect } from 'react-redux';


class Home extends React.Component {

    render() {
        return (
            <section className='home container' >
                <h2 className="section-title">{this.props.menu[0].name}</h2>
                <article className="home-article">
                    <h4 className="text-primary home-article__title">{this.props.home.title}</h4>
                    <div className="home-article__content">
                        <img className="home-article__img" src={imgArticle01} alt="im Article 01" />
                        <div className="home-article__text-content">
                            {this.props.home.content.map((element, i) =>
                                <p key={i}>{element.article}</p>)
                            }
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        menu: state.menu,
        home: state.home,
    }
}

export default connect(mapStateToProps)(Home);