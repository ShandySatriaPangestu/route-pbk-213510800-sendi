<template>
    <div class="not-found">
      <h2>404</h2>
      <h3>Page Not Found</h3>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href="/">Go back to Home</a>
    </div>
  </template>
<style>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
 
  color: #444;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 10rem;
  font-weight: bold;
  margin-bottom: 0;
  color: #f44336;
}

h3 {
  font-size: 4rem;
  margin-top: 0;
  margin-bottom: 20px;
  color: #fff;
}

p {
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
}

a {
  font-size: 1.2rem;
  text-decoration: none;
  color: #f44336;
  border: 2px solid #f44336;
  padding: 10px 20px;
  border-radius: 25px;
  transition: all 0.3s ease;
}

a:hover {
  background-color: #f44336;
  color: #fff;
}
</style>
