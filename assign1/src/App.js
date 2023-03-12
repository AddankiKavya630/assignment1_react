import logo from './flower.png'
import './styles.css'
export default function App(){
    return <>
    <div className='container'>
    <img src={logo} alt='image' className='logo'/>
    <h2>Flowers</h2>
    <p>Aconites are one of the first bulb flowers to bloom in the spring and are known for their cheerful yellow color. Plant Aconites in a large group together and you'll be able to smell their sweet, honey-like fragrance.</p>
    <a>SHARE</a> 
    <a>LEARN MORE</a>
   
    
    </div>
    </>
}