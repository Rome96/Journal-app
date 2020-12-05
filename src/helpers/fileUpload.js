const urlBase = 'https://api.cloudinary.com/v1_1/dyz9rra4t/upload';

export const fileUpload = async (file) => {
  const formData = new FormData();
  formData.append('upload_preset', 'journal-app');
  formData.append('file', file);

  try {
    const res = await fetch(`${urlBase}`, {
      method: 'POST',
      body: formData
    });
    
    if ( res.status === 200 ) {
      const cloudRes = await res.json();
      return cloudRes.secure_url;
    } else {
      throw await res.json();
    }

  } catch (error) {
    throw error
    // console.log('Error al subir la imagen =>', error);
  };

};