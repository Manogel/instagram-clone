import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import { useNavigation } from 'react-navigation-hooks';
import {
  Container,
  SelectButton,
  SelectButtonText,
  Input,
  ShareButton,
  ShareButtonText,
  Preview,
} from './styles';
import api from '~/services/api';

export default function Post() {
  const [post, setPost] = useState({
    author: '',
    place: '',
    description: '',
    hashtags: '',
    preview: null,
    image: null,
  });
  const { navigate } = useNavigation();

  function selectImage() {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar Imagem',
      },
      (upload) => {
        if (upload.error) {
          console.tron.log('Error');
        } else if (upload.didCancel) {
          console.tron.log('Used canceled');
        } else {
          const preview = {
            uri: `data:image/jpeg;base64,${upload.data}`,
          };

          let prefix;
          let ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split('.');
            ext = ext.toLocaleLowerCase() === 'heic' ? 'jpg' : ext;
          } else {
            prefix = new Date().getTime();
            ext = 'jpg';
          }

          const image = {
            uri: upload.uri,
            type: upload.type,
            name: `${prefix}.${ext}`,
          };

          setPost({ preview, image });
        }
      },
    );
  }

  async function handleSubmit() {
    const data = new FormData();
    data.append('image', post.image);
    data.append('author', post.author);
    data.append('description', post.description);
    data.append('place', post.place);
    data.append('hashtags', post.hashtags);

    await api.post('/posts', data);
    console.log(data);
    navigate('Feed');
  }

  return (
    <Container>
      <SelectButton onPress={selectImage}>
        <SelectButtonText> Selecionar imagem </SelectButtonText>
      </SelectButton>

      {post.preview && <Preview source={post.preview} />}

      <Input
        autoCorret={false}
        autoCapitalize="none"
        placeholder="Nome do autor"
        placeholderTextColor="#999"
        value={post.author}
        onChangeText={author => setPost({ author })}
      />
      <Input
        autoCorret={false}
        autoCapitalize="none"
        placeholder="Local da foto"
        placeholderTextColor="#999"
        value={post.place}
        onChangeText={place => setPost({ place })}
      />
      <Input
        autoCorret={false}
        autoCapitalize="none"
        placeholder="Descrição"
        placeholderTextColor="#999"
        value={post.description}
        onChangeText={description => setPost({ description })}
      />
      <Input
        autoCorret={false}
        autoCapitalize="none"
        placeholder="Hashtags"
        placeholderTextColor="#999"
        value={post.hashtags}
        onChangeText={hashtags => setPost({ hashtags })}
      />

      <ShareButton onPress={handleSubmit}>
        <ShareButtonText> Compartilhar </ShareButtonText>
      </ShareButton>
    </Container>
  );
}

Post.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Nova Publicação',
});
