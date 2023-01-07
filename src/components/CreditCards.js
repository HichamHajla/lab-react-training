import '../App.css'
import visaLogo from '../assets/images/visa.png'
import masterLogo from '../assets/images/masterCard.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    
        const lastFourDigits = number.slice(-4);
      
        return (
          
            <div className='card' style={{ backgroundColor: bgColor, color: color, width: '300px', height: '160px' }}>
              <div>
                <div>{type === "Visa" ? <img className='logo' src={visaLogo} alt="visaLogo"/> :  <img className='logo' src={masterLogo} alt="masterLogo"/>}</div>
                <div className='num'>{`**** **** **** ${lastFourDigits}`}</div>
              </div>
              <div>
                <div className='date'>{`Expires: ${expirationMonth}/${expirationYear}`}<span className='bank'>{bank}</span></div>
              </div>
              <div>
                <div></div>
                <div className='owner'>{owner}</div>
              </div>
            </div>
         
        );
      }
      
      export default CreditCard;
