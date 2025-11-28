import React, { useState, useContext } from 'react';
import { FaHeart, FaRegHeart, FaComment } from 'react-icons/fa';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    const { user } = useContext(AuthContext);
    const [liked, setLiked] = useState(post.likes.some(like => like.user.id === user.id));
    const [likesCount, setLikesCount] = useState(post.likes.length);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState(post.comments);

    const handleLike = async () => {
        try {
            if (liked) {
                await api.post(`/posts/${post.id}/unlike`);
                setLikesCount(prev => prev - 1);
            } else {
                await api.post(`/posts/${post.id}/like`);
                setLikesCount(prev => prev + 1);
            }
            setLiked(!liked);
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const handleComment = async (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;
        try {
            const response = await api.post(`/posts/${post.id}/comments`, { text: commentText });
            setComments([...comments, response.data]);
            setCommentText('');
        } catch (error) {
            console.error('Error commenting:', error);
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded mb-8">
            {/* Header */}
            <div className="flex items-center p-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                <Link to={`/profile/${post.user.username}`} className="font-bold text-sm hover:underline">
                    {post.user.username}
                </Link>
            </div>

            {/* Image */}
            <div className="w-full bg-gray-100 aspect-square flex items-center justify-center overflow-hidden">
                <img src={post.imageUrl} alt="Post" className="object-cover w-full h-full" />
            </div>

            {/* Actions */}
            <div className="p-3">
                <div className="flex space-x-4 mb-2">
                    <button onClick={handleLike} className="text-2xl focus:outline-none">
                        {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                    </button>
                    <button className="text-2xl focus:outline-none">
                        <FaComment />
                    </button>
                </div>
                <p className="font-bold text-sm mb-1">{likesCount} likes</p>

                {/* Caption */}
                <div className="mb-2">
                    <span className="font-bold text-sm mr-2">{post.user.username}</span>
                    <span className="text-sm">{post.caption}</span>
                </div>

                {/* Comments */}
                {comments.length > 0 && (
                    <div className="mb-2">
                        {comments.map((comment) => (
                            <div key={comment.id} className="text-sm">
                                <span className="font-bold mr-2">{comment.user.username}</span>
                                <span>{comment.text}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Add Comment */}
                <form onSubmit={handleComment} className="flex items-center mt-2 border-t pt-2">
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="flex-grow text-sm focus:outline-none"
                    />
                    <button type="submit" className="text-blue-500 font-bold text-sm ml-2 disabled:opacity-50" disabled={!commentText.trim()}>
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostCard;
