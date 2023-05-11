<template>
  <div class="about">
    <div class="profile">
      <div class="img-container">
        <img :src="require('@/assets/aboutsendi.jpg')" alt="Profile Picture" />
      </div>
      <div class="info">
        <div class="info-container">
          <h2>Hi, I'm Shandy Satria Pangestu</h2>
          <p>Saya adalah salah satu mahasiswa Teknik Informatika Universitas Islam Riau yang saat ini menempuh semester 4</p>
          <p>Beralamatkan di Jln Sembilang Rumbai Pekanbaru, setiap hari dihabiskan dengan belajar + ngampus + organsisasi + freelance + menonton film</p>
          <p>Saya suka memecahkan masalah, bermain game, dan jalan jalan</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    background-color: hwb(221, 3%, 63%);
  }
  .profile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .profile img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-right: 50px;
  }
  .info {
    display: flex;
    flex-direction: column;
  }
  .info h2 {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
  }
  .info p {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1.5;
    color: #666;
  }
  .img-container {
    text-align: center;
    margin-bottom: 20px;
  }
  .img-container img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }
  .info-container {
    background: linear-gradient(to bottom, hwb(217 3% 73%), hwb(217 3% 73%, 0.9));
    padding: 20px;
  }
  .info h2 {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
    color: white;
  }
  .info p {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1.5;
    color: white;
    font-weight: bold;
  }
</style>
