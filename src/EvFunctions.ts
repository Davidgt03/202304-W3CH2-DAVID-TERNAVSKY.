export const aliveButton = document.querySelector('.character__action .btn')!;
export const dead = document.querySelector('fas fa-thumbs-down')!;
export const alive = document.querySelector('fas fa-thumbs-up')!;
export const aliveFunction = () => {
  aliveButton.addEventListener('click', () => {
    if (alive) {
      return dead;
    }
  });
};
