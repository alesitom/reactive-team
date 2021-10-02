import '../styles/cover.css';
import { showModal } from './modal';

function Cover() {
  return (
    <div className="container-cover">
      <h2>Support Your Local Artisans</h2>
      <p>Discover brands and their stories</p>
      <button onClick={()=>showModal()}>
        Browse brands
      </button> 
    </div>
  );
}

export default Cover;
