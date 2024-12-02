module.exports = {
  content: ["./app/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "cta-bg": "url('/public/img/cta-bg.jpg')", // Remplacez par le chemin correct de votre image
      },
    },
  },
  plugins: [],
};
