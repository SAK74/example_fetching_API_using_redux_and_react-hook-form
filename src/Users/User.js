import PropTypes from "prop-types";

function User({ name, picture }) {
  return (
    <div className="user">
      <h2>
        {name.first} {name.last}
      </h2>
      <img src={picture.thumbnail} alt="userPhoto" />
    </div>
  );
}

User.proptypes = {
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired
  }),
  picture: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired
  })
};
export default User;
