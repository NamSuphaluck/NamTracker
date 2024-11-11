import './User.css'

function User({setRole ,setToken}) {
          const Logout = () => {
                    setToken('');
                    setRole('');
          }
          return (
                    <div className="user-container">
                              <h1>User</h1>
                              <button type="button" className='btn btn-danger' onClick={() => Logout()}>Logout</button>
                    </div>
          )
}
export default User