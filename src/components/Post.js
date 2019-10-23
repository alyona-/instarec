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
                    Равным образом, укрепление и развитие внутренней структуры позволяет выполнить важные задания по разработке
                    системы обучения кадров, соответствующей насущным потребностям. Мы вынуждены отталкиваться от того, что
                    повышение уровня гражданского сознания играет важную роль в формировании своевременного выполнения
                    сверхзадачи. В частности, разбавленное изрядной долей эмпатии, рациональное мышление требует от нас анализа
                    позиций, занимаемых участниками в отношении поставленных задач.
                </div>
            </div>
        )
    }
}