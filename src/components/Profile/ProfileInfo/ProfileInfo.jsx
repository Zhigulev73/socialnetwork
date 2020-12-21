import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://webarty.net/files/img/1453016921.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;