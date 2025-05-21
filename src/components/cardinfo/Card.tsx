import './card.css';

interface CardProp {
    header : string,
    description : string,
    href: string,
    extraDescription: string,
    image: string
    
}

const Card : React.FC<CardProp> = ({header, description, href, extraDescription, image}) => {

    return (
        <div className="card-hover">
            <div className="card-hover__content">
            <h3 className="card-hover__title">
                {header}
            </h3>
            <p className="card-hover__text"> {description}</p>
            <a href={href} className="card-hover__link">
                <span>Click here</span>
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>        
            </a>
            </div>
            <div className="card-hover__extra">
            <h4>{extraDescription}</h4>
            </div>
            <img src={image}/>
        </div>
    );
}

export default Card;