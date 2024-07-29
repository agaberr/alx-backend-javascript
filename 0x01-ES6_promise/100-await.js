import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photoResponse;
  let userResponse;

  try {
    photoResponse = await uploadPhoto();
  } catch (error) {
    console.error('Error uploading photo:', error.message);
    return {};
  }

  try {
    userResponse = await createUser('Guillaume', 'Salva');
  } catch (error) {
    console.error('Error creating user:', error.message);
    return {};
  }

  return { photo: photoResponse, user: userResponse };
}
