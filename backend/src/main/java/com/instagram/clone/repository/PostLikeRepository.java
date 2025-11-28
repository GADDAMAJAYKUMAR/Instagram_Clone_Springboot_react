package com.instagram.clone.repository;

import com.instagram.clone.model.PostLike;
import com.instagram.clone.model.Post;
import com.instagram.clone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface PostLikeRepository extends JpaRepository<PostLike, Long> {
    Optional<PostLike> findByUserAndPost(User user, Post post);
    boolean existsByUserAndPost(User user, Post post);
}
