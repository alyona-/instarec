import React  from 'react';

import User from "./User";

export default function Users() {
    return (
        <div className="right">
            <User
                src="https://whatsapp-help.com/wp-content/uploads/2019/07/11-min.jpg"
                alt="man"
                name="Alyona"

            />
            <div className="users__block">
                <User
                    src="https://whatsapp-help.com/wp-content/uploads/2019/07/11-min.jpg"
                    alt="man"
                    name="Alyona"
                    min={true}
                />

                <User
                    src="https://whatsapp-help.com/wp-content/uploads/2019/07/11-min.jpg"
                    alt="man"
                    name="Alyona"
                    min={true}
                />

                <User
                    src="https://whatsapp-help.com/wp-content/uploads/2019/07/11-min.jpg"
                    alt="man"
                    name="Alyona"
                    min={true}
                />

                <User
                    src="https://whatsapp-help.com/wp-content/uploads/2019/07/11-min.jpg"
                    alt="man"
                    name="Alyona"
                    min={true}
                />
            </div>
        </div>



    )
}