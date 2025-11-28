import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { username } = useParams();
    const { user: currentUser } = useContext(AuthContext);
    const [profileUser, setProfileUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userRes = await api.get(`/users/${username}`);
                setProfileUser(userRes.data);

                // Check if following
                // Note: In a real app, the backend should return this status or we check the list
                // For simplicity, we'll assume the backend returns 'followers' list in user object
                // But my User entity has followers list, but it might be lazy loaded or large.
                // Let's assume the backend User DTO (which I didn't create specific DTO for user profile, just returned User entity)
                // has followers.
                // Wait, I returned User entity directly in UserController.
                // User entity has List<User> followers.
                // So I can check if currentUser.id is in profileUser.followers

                const isFollower = userRes.data.followers.some(f => f.id === currentUser.id);
                setIsFollowing(isFollower);

                const postsRes = await api.get(`/posts/user/${userRes.data.id}`);
                setPosts(postsRes.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [username, currentUser.id]);

    const handleFollow = async () => {
        try {
            if (isFollowing) {
                await api.post(`/users/${profileUser.id}/unfollow`);
                setIsFollowing(false);
                setProfileUser(prev => ({
                    ...prev,
                    followers: prev.followers.filter(f => f.id !== currentUser.id)
                }));
            } else {
                await api.post(`/users/${profileUser.id}/follow`);
                setIsFollowing(true);
                setProfileUser(prev => ({
                    ...prev,
                    followers: [...prev.followers, currentUser]
                }));
            }
        } catch (error) {
            console.error('Error following/unfollowing:', error);
        }
    };

    if (loading) return <div className="flex justify-center mt-10">Loading...</div>;
    if (!profileUser) return <div className="text-center mt-10">User not found</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-4xl mx-auto pt-20 pb-10 px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 md:mb-0 md:mr-10"></div>
                    <div className="flex-1">
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl font-light mr-4">{profileUser.username}</h2>
                            {currentUser.username !== profileUser.username && (
                                <button
                                    onClick={handleFollow}
                                    className={`px-4 py-1 font-semibold rounded ${isFollowing
                                            ? 'bg-white border border-gray-300 text-black'
                                            : 'bg-blue-500 text-white'
                                        }`}
                                >
                                    {isFollowing ? 'Following' : 'Follow'}
                                </button>
                            )}
                        </div>
                        <div className="flex space-x-8 mb-4">
                            <span><strong>{posts.length}</strong> posts</span>
                            <span><strong>{profileUser.followers.length}</strong> followers</span>
                            <span><strong>{profileUser.following.length}</strong> following</span>
                        </div>
                        <div>
                            <p className="font-bold">{profileUser.username}</p>
                            <p>{profileUser.bio}</p>
                        </div>
                    </div>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-3 gap-1 md:gap-4">
                    {posts.map((post) => (
                        <div key={post.id} className="relative aspect-square bg-gray-200 group">
                            <img src={post.imageUrl} alt="Post" className="object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-all duration-200"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
