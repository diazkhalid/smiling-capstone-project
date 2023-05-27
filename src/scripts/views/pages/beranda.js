/* eslint-disable linebreak-style */

const Beranda = {
  async render() {
    return `
            <h2>Tes</h2>
        `;
  },

  async afterRender() {
    console.log('after render');
  },
};

export default Beranda;
