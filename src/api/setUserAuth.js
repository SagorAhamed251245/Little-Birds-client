export const setNewUser = user => {
    const newUser = {
      email: user.email,
      user_name:user.displayName,
      user_image:user.photoURL
      
    }
  
    fetch(`${import.meta.env.VITE_apiUrl}/users/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

