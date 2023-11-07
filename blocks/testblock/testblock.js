import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* decorate the testblock*/
  const testBlock= block.querySelector(':scope > div > div');
  const blockTestBlock= document.createElement('testblock');
  blockTestBlock.innerHTML= `"${testBlock.innerHTML}"`;
  testBlock.parentElement.replaceWith(blockTestBlock);

  /* decorate the author*/
  const authortestBlock= block.querySelector(':scope > div > div');
  if(authortestBlock){
  const p= document.createElement('p');
  p.innerHTML= `<em> - ${authortestBlock.innerHTML} </em>`;
  authortestBlock.parentElement.replaceWith(p);
}
}
