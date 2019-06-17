import React, { useState } from "react";

import { Form, InputFile, Input, Button } from "./styles";
import camera from "../../assets/camera.svg";
import api from "../../services/api";

export default function New(props) {
  const [post, setPost] = useState({
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: ""
  });

  function handleImage(e) {
    setPost({ ...post, image: e.target.files[0] });
  }

  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("image", post.image);
    data.append("author", post.author);
    data.append("description", post.description);
    data.append("place", post.place);
    data.append("hashtags", post.hashtags);

    await api.post("/posts", data);
    console.log(data);
    props.history.push("/");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputFile for="photo">
        <img src={camera} alt="foto do post" />
        Sua Foto
      </InputFile>
      <input onInput={handleImage} name="image" id="photo" type="file" />
      <Input
        onInput={handleChange}
        name="author"
        type="text"
        placeholder="Autor"
      />
      <Input
        onInput={handleChange}
        name="place"
        type="text"
        placeholder="Local da foto"
      />
      <Input
        onInput={handleChange}
        name="description"
        type="text"
        placeholder="Descrição"
      />
      <Input
        onInput={handleChange}
        name="hashtags"
        type="text"
        placeholder="HashTags"
      />
      <Button type="submit">Enviar</Button>
    </Form>
  );
}
