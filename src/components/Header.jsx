import { makeStyles } from "@mui/styles";

const useStyles = makeStyles( {
    logo: {
        width: 46,
        height: 46,
    }
} )

function Header() {
    const classes = useStyles()
    const path = "src/assets/postman-icon-svgrepo-com.svg"

  return (
    <img src={path} alt="Postman" className={classes.logo} />
  );
}

export default Header;
