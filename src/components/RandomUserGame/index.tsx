import React, { useState } from 'react'
import {
  IonContent,
  IonItem,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonAvatar,
  IonList,
} from '@ionic/react'
import { useQuery } from '@tanstack/react-query'

// Minimal User type
interface User {
  name: {
    first: string
    last: string
  }
  email: string
  picture: {
    thumbnail: string
  }
}

// Fetch users
const fetchUsers = async ({ limit }: { limit: number }): Promise<User[]> => {
  const response = await fetch(`https://randomuser.me/api/?results=${limit}`)
  const data = await response.json()
  return data.results
}

// RandomUserGame component
const RandomUserGame: React.FC = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUsers({ limit: 100 }),
  })
  const [userList, setUserList] = useState<User[]>([])

  // Update user list after fetch
  React.useEffect(() => {
    if (users) {
      setUserList(users)
    }
  }, [users])

  // Remove user from list
  const removeUser = (email: string) => {
    setUserList(userList.filter((user) => user.email !== email))
  }

  if (isLoading) return <IonLabel>Loading...</IonLabel>

  return (
    <IonContent>
      <IonList>
        {userList.map((user) => (
          <IonItemSliding key={user.email}>
            <IonItem>
              <IonAvatar slot="start">
                <img
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} ${user.name.last}`}
                />
              </IonAvatar>
              <IonLabel>
                {user.name.first} {user.name.last}
                <br />
                {user.email}
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption
                color="danger"
                onClick={() => removeUser(user.email)}
              >
                Remove
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>
    </IonContent>
  )
}

export default RandomUserGame
