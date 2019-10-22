import React, {Component}  from 'react';

import User from "./User";


export default class Post extends Component{
    render (){
        return (
            <div className="post">
                <User
                    src="https://whatsapp-help.com/wp-content/uploads/2019/07/11-min.jpg"
                      alt="man"
                      name="Alyona"
                     min={true}
                />
                <img src={this.props.src} alt={this.props.alt}></img>

                <div className="post__name">
                    some account
                </div>

                <div className="post__descr">
                    lorem ipsim  edrkewl jewklr wekrj wewejkr ekw rweklrjwekl rekwwewe
                    r werwe rwe rwe ew we weqewrqwer wer we. qwrweqrqwerqwer wqer wer wer
                     werweq wer qwer wer qwer weqr weqqwetytrytrytr rty ytry try
                    try tr ytrytry
                </div>
            </div>
        )
    }
}