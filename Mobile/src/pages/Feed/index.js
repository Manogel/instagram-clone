import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import { FlatList, View, Image, TouchableOpacity, Text } from 'react-native';
import camera from '~/assets/camera.png'
import api from '~/services/api';
import {Like,
  Description,
  HashTags, Container, FeedItem, FeedItemHeader, UserInfo, Action, Author, Place, FeedImage, FeedImageFooter, Actions } from './styles';

import more from '~/assets/more.png'
import like from '~/assets/like.png'
import comment from '~/assets/comment.png'
import send from '~/assets/send.png'


export default function Feed() {
  const [feed, setFeed] = useState([]);
  const socket = io("http://192.168.2.136:3333");
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

  function postItem(post){
    return (
      <FeedItem>
        <FeedItemHeader>
          <UserInfo>
            <Author> {post.author}</Author>
            <Place> {post.place} </Place>
          </UserInfo>
          <Image source={more} />
        </FeedItemHeader>
        <FeedImage source={{ uri: `http://192.168.2.136:3333/file/${post.image}`}} />
        <FeedImageFooter>
          <Actions>
            <Action onPress={() => {handleLike(post._id)}}>
              <Image source={like} />
            </Action>
            <Action>
              <Image source={comment} />
            </Action>
            <Action>
              <Image source={send} />
            </Action>
          </Actions>
          <Like> {post.like} Likes</Like>
        <Description> {post.description} </Description>
        <HashTags> {post.hashtags}</HashTags>
        </FeedImageFooter>


      </FeedItem>
    )
  }


  return (
    <Container>
    <FlatList
    data={feed}
    keyExtractor={ post => post._id}
    renderItem= {({item}) => postItem(item)}
    />
     </Container>
  );
}

Feed.navigationOptions = ({ navigation }) => ({
  headerRight: (
  <TouchableOpacity onPress={ () => {navigation.navigate('Post')}}>
    <Image style={{marginHorizontal: 20}} source = {camera} />
  </TouchableOpacity>)
});