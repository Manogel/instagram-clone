import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import {
  Picture,
  Actions,
  Container,
  PostList,
  Header,
  Bottom
} from "./styles";

import more from "../../assets/more.svg";
import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";
import send from "../../assets/send.svg";
import api from "../../services/api";

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const socket = io("http://localhost:3333");
  useEffect(getFeed, []);
  useEffect(socketIO, [feed, socket]);

  function socketIO() {
    socket.on("Post", newPost => {
      setFeed([newPost, ...feed]);
    });

    socket.on("Like", LikedPost => {
      setFeed(
        feed.map(post => (LikedPost._id === post._id ? LikedPost : post))
      );
    });
  }

  async function getFeed() {
    ///socketIO();
    const { data } = await api.get("/posts");
    setFeed(data);
  }
  async function handleLike(id) {
    await api.post(`/posts/${id}/like`);
  }

  return (
    <Container>
      {feed.map(post => (
        <PostList key={post._id}>
          <Header>
            <div>
              <span> {post.author} </span>
              <span id="place"> {post.place} </span>
            </div>
            <img src={more} alt="Mais" />
          </Header>
          <Picture
            src={`http://localhost:3333/file/${post.image}`}
            alt="foto"
          />
          <Bottom>
            <Actions>
              <button type="button" onClick={() => handleLike(post._id)}>
                <img src={like} alt="Curtir" />
              </button>
              <img src={comment} alt="Curtir" />
              <img src={send} alt="Curtir" />
            </Actions>
            <strong> {post.like} likes</strong>
            <p>
              {post.description}
              <span> {post.hashtags}</span>
            </p>
          </Bottom>
        </PostList>
      ))}
    </Container>
  );
}
