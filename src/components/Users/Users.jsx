import React from 'react'
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0 ) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: 'https://icdn.lenta.ru/images/2018/01/25/14/20180125140445266/pic_2100e8de52f00d949f474f53a9bfb99b.jpg',
                followed: false,
                fullName: 'Kirill',
                status: 'Im a boss',
                location: 'Ulyanovsk',
                country: 'Russia'
            },
                {
                    id: 2,
                    photoUrl: 'https://icdn.lenta.ru/images/2018/01/25/14/20180125140445266/pic_2100e8de52f00d949f474f53a9bfb99b.jpg',
                    followed: false,
                    fullName: 'Dasha',
                    status: 'Im a boss',
                    location: 'Ulyanovsk',
                    country: 'Russia'
                },
                {
                    id: 3,
                    photoUrl: 'https://icdn.lenta.ru/images/2018/01/25/14/20180125140445266/pic_2100e8de52f00d949f474f53a9bfb99b.jpg',
                    followed: false,
                    fullName: 'Ilya',
                    status: 'Im a boss',
                    location: 'Ulyanovsk',
                    country: 'Russia'
                },
                {
                    id: 4,
                    photoUrl: 'https://icdn.lenta.ru/images/2018/01/25/14/20180125140445266/pic_2100e8de52f00d949f474f53a9bfb99b.jpg',
                    followed: true,
                    fullName: 'Den',
                    status: 'Im a boss',
                    location: 'Ulyanovsk',
                    country: 'Russia'
                }
                ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users
