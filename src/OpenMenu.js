import React from 'react';
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import SendIcon from '@material-ui/icons/Send';
import './OpenMenu.css'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "rgb(142, 210, 211)",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.black,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="info"
        onClick={handleClick}
      >
        Select Store
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/dairy" className="menuList"><span >Dairy Items</span></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <SendIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/grocery" className="menuList"><span >Groceries</span></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <SendIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/mithas" className="menuList"><span >Sweets/Namkeen</span></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <SendIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/md" className="menuList"><span >Sanitizers</span></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <SendIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/dreamcatchers" className="menuList"><span >Dream Catchers</span></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <SendIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/vindhy" className="menuList"><span >Bracelets</span></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          <SendIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/mc" className="menuList"><span >Modicare</span></Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
