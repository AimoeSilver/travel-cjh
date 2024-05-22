<template>
    <div class="carousel">
      <div class="carousel-inner" :style="carouselStyles">
        <slot></slot>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
      };
    },
    computed: {
      carouselStyles() {
        return {
          transform: `translateX(-${this.currentIndex * 100}%)`,
        };
      },
    },
    methods: {
      nextSlide() {
          this.currentIndex++;
      },
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.$slots.default().length - 1;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 1.4s ease;
    width: 100%;
    height: 100%;
  }
  
  .carousel-control {
    position: absolute;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  .prev {
    left: 10px;
  }
  
  .next {
    right: 10px;
  }
  </style>