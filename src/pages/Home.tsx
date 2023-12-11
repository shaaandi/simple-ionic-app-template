import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './Home.css'
import RandomUserGame from '../components/RandomUserGame'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Random User game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RandomUserGame />
      </IonContent>
    </IonPage>
  )
}

export default Home
