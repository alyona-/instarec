import React, {Component}  from 'react';

import Post from "./Post";

export default class Posts extends Component {
    render () {
        return (
            <div className="left ">
                <Post src="https://avatars.mds.yandex.net/get-pdb/234183/7bd2c3e7-18cb-4b11-895d-348260ff70c5/s1200" alt="inst" />
                <Post src="https://avatars.mds.yandex.net/get-pdb/69339/65019230-kartinki-21-tys-izobrazhenii-naideno-v-iandeks-kartinkakh-1468000370.26/s1200" alt="inst" />
                <Post src="https://im0-tub-ru.yandex.net/i?id=88af34a3c71847da095266b0ec56af68&n=33&w=427&h=320" alt="inst" />
            </div>
        )
    }
}