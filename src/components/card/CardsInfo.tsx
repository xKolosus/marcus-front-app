
import Card from './Card';
import './card.css'

const CardsInfo : React.FC = ()  => {

    return (
    <div className="card-container">
        <Card
            header='Who we are?'
            description='We are a familiar business selling many product'
            href='/about' 
            extraDescription='Go to more
            info about us'
            image='/Aboutus.jpg'
        />
         <Card
            header='Need help?'
            description='Feel free to contact us' 
            href='/contact'
            extraDescription='Send us your
            request, and we will answer
            as soon as possible'
            image='/Contactus.jpg'
         />
          <Card
            header='Products'
            description='See all of our products'
            href='/product'
            extraDescription='Let us show you
            all of our catalogue'
            image='/Products.jpg'
          />
    </div>
    );
}

export default CardsInfo;