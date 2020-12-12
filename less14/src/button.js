export function clickFunction() {
  let  i = 1;
  document.querySelector('#justButton').addEventListener('click', () => {
    let justButton = document.querySelector('#justButton');
    justButton.setAttribute('value', i );
    i = i + 1;
  })
}
