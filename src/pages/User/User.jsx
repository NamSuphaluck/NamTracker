import './User.css'

function User({setToken}) {
          return (
                    <div className="user-container">
                              <h1>User</h1>
                              <button type="button" className='btn btn-danger' onClick={() => setToken('') }>Logout</button>
                    </div>
          )
}
export default User