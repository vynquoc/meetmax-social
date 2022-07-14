import React, { useState } from 'react';
//components
import AvatarIcon from '../../../../components/AvatarIcon';
import Button from '../../../../components/Button';

import postApi from '../../../../api/postApi';
import { uploadImage } from '../../../../utils';
import './style.scss';

const PostContentForm = () => {
  const [formFields, setFormFields] = useState<any>();
  const [photo, setPhoto] = useState<any>(null);

  const handlePhotoChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    setPhoto(files);
  };

  const handleFormFieldsChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleCreatePost = async (photoUrl: string) => {
    try {
      await postApi.create({ ...formFields, photo: photoUrl });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const { data } = await uploadImage(photo);
      await handleCreatePost(data.url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="content-form-container">
      <p>Create a post</p>
      <hr />
      <div className="input-section">
        <AvatarIcon />
        <textarea
          placeholder="What's happening ?"
          name="content"
          onChange={handleFormFieldsChange}
        />
      </div>
      <div className="submit-section">
        <input type="file" name="photo" onChange={handlePhotoChange} />
        <div>
          <Button text="Post" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default PostContentForm;
