import { Link, useParams } from 'react-router-dom';

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

export const FriendPage = () => {
    const { index } = useParams<{ index: string | undefined }>(); 
   
    if (index === undefined) {
        return <div>Friend not found</div>;
    }

    const friendIndex = parseInt(index);

    const friend: FriendsInfoProps | undefined = friendsInfo[friendIndex];
    if (!friend) {
        return <div>Friend not found</div>;
    }

    return (
        <div>
            <h1>{friend.name}</h1>
            <h2>Age: {friend.age}</h2>
            <h3>Hobby: {friend.hobby}</h3>
            <Link to={'/'}>go back</Link>
        </div>
    );
}