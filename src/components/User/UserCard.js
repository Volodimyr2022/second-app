
const UserCard = ({name,surname,age }) => {
  return(
  <div>
    <div>
      User information:
    </div>
    <div>
      Name:  {name}
    </div>
    <div>
      Surname:  {surname}
    </div>
    <div>
      Age:  {age}
      </div>
  </div>
  )
}

export  default UserCard