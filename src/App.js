import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCards';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';


const App = () => {
  return (
    <>
    <h1>Iteration 1 : IdCards</h1>

    <div className="App">
     <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
    </div>
    <div className="App">
    <IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Iteration 2 : Greetings</h1>

    </div>
    <div className='greetings'>
    <Greetings lang="de">Ludwig</Greetings>
    </div>
    <div className='greetings'>
    <Greetings lang="fr">François</Greetings>
    </div>

    <h1>Iteration 3 : Random</h1>

    <div className="random">
      <Random min={1} max={6}/>
    </div>
    <div className="random">
      <Random min={1} max={100}/>
    </div>

    <h1>Iteration 4 : BoxColor </h1>

    <div style={{color: 'white'}}>
    <BoxColor r={255} g={0} b={0} />
    </div>
    <div>
    <BoxColor r={128} g={255} b={0} />
    </div>

    <h1>Iteration 5 : Credit Cards</h1>
      <div className='threeCards'>
            <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="LCL"
          owner="Maxence Bouret"
          bgColor="#ddbb55"
          color="white" 
        />
    </div>

    <h1>Iteration 6 : Component Rating</h1>
    <div className='rate'>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>

    <h1>Iteration 7 : Component DriverCard</h1>

    <DriverCard
      name="Travis Kalanick"
      rating={4.2}
      img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
      car={{
        model: "Toyota Corolla",
        licensePlate: "CO42DE"
      }}
    />

    <DriverCard
      name="Dara Khosrowshahi"
      rating={4.9}
      img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
      car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
      }}
    />

    
    </>
  );
}

export default App;
