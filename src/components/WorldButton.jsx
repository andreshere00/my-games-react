import '../styles/worldButton.css'

export default function WorldButton(params) {
    return (
        <div className='button'>
            <img className="globe" src={require('../assets/globe.png')} />
        </div>
    )
};
