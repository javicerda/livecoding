<template>
  <div>
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="220"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <b-carousel-slide img-src="/slide_01.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="/slide_02.jpg"></b-carousel-slide>
    </b-carousel>
  </div>
</template>