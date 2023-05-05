import './followCard.css'
import UserInfo from './UserInfo';

function FollowCard() {

  const object = [
    {id: 1, name: 'Rafael Gamboa', username: '@rafagamboa', photo:'https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1'},
    {id: 2, name: 'Jose Salinas', username: '@Jossesalinas', photo:'https://st.depositphotos.com/1037987/2464/i/950/depositphotos_24647335-stock-photo-portrait-of-happy-senior-man.jpg'},
    {id: 3, name: 'Jesus Azocar', username: '@azucar', photo:'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/DXCQKY5BORADVDDI636YUPNRA4.jpg'},
    {id: 4, name: 'Jose Giron', username: '@soyGiron', photo:'https://previews.123rf.com/images/mognev/mognev2207/mognev220700048/188608479-retrato-de-un-anciano-joven-con-una-sonrisa-feliz-cara-de-abuelo-afroamericano-con-gafas-pelo.jpg'}
  ];

  return (
    <div className="App">
      {object.map(i => (
        <UserInfo key={i.id} userName={i.username} name={i.name} photo={i.photo} />
      ))}
    </div>
  )
}
export default FollowCard