import { Dialog,Grid } from '@material-ui/core';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';

import CircularProgress from '@material-ui/core/CircularProgress';

//Local Imports
import { Menu } from '../../../shared/components/menu/menu'

import emailjs from 'emailjs-com';

import {
  Containerbody,
  ContainerbodyOpacity,
  ComicContainer,
  DialogBody
} from './favoritesStyle'

export function Favorites() {
  const myFavoritesComics = useSelector(state => state.DashboardReducer.getMyFavoriteComics);

  const [isOpen, setIsOpen] = useState(false)
  const [saveComicInfo, setSaveComicInfo] = useState([])
  const [send, setSend] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleSelect = (item) => {
    setSaveComicInfo(item)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setSend(false)
  }

  const handleSend = (e) => {
    setLoading(true)
    e.preventDefault();
    emailjs.sendForm('service_sa58edu', 'marvel', e.target, 'user_SK6nfixtZ37hXE9PLwU3S')
      .then((result) => {
          console.log(result.text);
          setSend(true)
          setLoading(false)
          setEmail('')
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
    <Dialog onClose={(e) => handleClose(e) } aria-labelledby="simple-dialog-title" open={isOpen}>
      <DialogBody>
        <h3>{saveComicInfo.name}</h3>
        <div>
          <img 
            style={{height:'120px',width:'100px',marginRight:10}}
            alt='comic img' 
            src={`${saveComicInfo?.thumbnail?.path}.${saveComicInfo?.thumbnail?.extension}`}/>
          <div style={{flexDirection:'column',marginBottom:'20px'}}>
            <p>Description</p><br/>
            <p>{saveComicInfo?.description? saveComicInfo?.description:'Unfortunately we dont have the description for this comic'}</p>
          </div>
        </div>
          <div style={{alignItems:'center'}}>
            <FavoriteIcon />
            <p>This comic is in favorites</p>
          </div>
          <div style={{marginTop:20}} />
          {loading ? <CircularProgress/> : ''}
          
          {send ? <p style={{color:'green'}}>Email Sended!!!!</p> : 
          <form onSubmit={handleSend}>
            <input 
              style={{width:'100%'}}
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Put your email here'
            />
            <input style={{width:'100%'}} type="submit" value="Send me by email" />
            {/* <input 
              name="message" 
              style={{display:'none'}} 
              value={
                `${saveComicInfo.name} \n\n
                  Description \n\n
                  ${saveComicInfo?.description? saveComicInfo?.description :'Unfortunately we dont have the description for this comic'}
                  ${saveComicInfo.urls?.map(item => {
                    return `${item.url}\n`
                  })} 
                `
              }
            /> */}
          </form>
          }
      </DialogBody>
    </Dialog>
    <Menu />
    <Containerbody>
      <ContainerbodyOpacity>
        <h1>Marvel Comics Favorites</h1>
        <Grid 
          container spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {myFavoritesComics.map((item,index) => {
            return (
              <Grid 
                item xs={6} md={2}
                style={{display:'flex',justifyContent:"center",marginTop:'15px'}}
              > 
                <ComicContainer 
                  onClick={() => handleSelect(item)}
                  style={
                    {
                      background: `url(${item.thumbnail.path}.${item.thumbnail.extension})`,
                      backgroundSize: 'cover'
                    }
                }>
                  <div>
                    <p>{item.name}</p>
                  </div>
                </ComicContainer>
              </Grid>
            )
          })}
        </Grid>
      </ContainerbodyOpacity>
    </Containerbody>
    </>
  );
}
