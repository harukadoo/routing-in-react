import { Link } from "react-router-dom"

interface FriendsInfoProps {
    name: string;
    age: number;
    hobby: string;
}


const friendsInfo: FriendsInfoProps[] = [
    {name: 'Mira', age: 18, hobby: 'write stories'},
    {name: 'Yura', age: 18, hobby: 'play video games'},
    {name: 'Tanya', age: 16, hobby: 'drawing'},
    {name: 'Lisa', age: 17, hobby: 'dancing'},
]

export const Home = () => {
    return (
        <div>
            <h1>Information about my friends</h1>
            <h3>Choose a friend:</h3>

            <div>
                <ul>
                    {friendsInfo.map((friend: FriendsInfoProps, index: number) => (
                        <li><Link to={`/friend/${index}`}>{friend.name}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}