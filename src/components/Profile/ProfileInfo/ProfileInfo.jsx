import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>
    )
}

export default ProfileInfo;