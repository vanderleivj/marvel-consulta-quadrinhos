import { Dialog,Grid } from '@material-ui/core';
import { useState } from 'react'
//img
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

//Local Imports
import { Menu } from '../../../shared/components/menu/menu'

//Redux
import { saveFavoriteComics } from '../redux/dashboardActions'

import { api } from '../../../core/api/api'

import {
  Containerbody,
  ContainerbodyOpacity,
  ComicContainer,
  DialogBody
} from './dashboardStyle'
import { useDispatch } from 'react-redux';

export function Dashboard() {
  const dispatch = useDispatch()

  //States
  const [comicsRecover, setComicsRecover] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [saveComicInfo, setSaveComicInfo] = useState({})
  const [favorite, setFavorite] = useState(false)
  const [myFavorites, setMyFavorites] = useState([])

  const handleChange = (text) => {
    api.get(`/characters?apikey=90477e77a3b01a078ec22b190e677c21&ts=1629003931&hash=36847f3d516088a7ce0d7e26491c4832&limit=40&offset=0&nameStartsWith=${text}`)
    .then((response) =>  setComicsRecover(response?.data?.data?.results))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  const handleSelect = (item) => {
    setSaveComicInfo(item)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setFavorite(false)
  }

  const handleFavorite = async() => {
    setFavorite(true)
    await setMyFavorites([...myFavorites,saveComicInfo])
    dispatch(saveFavoriteComics(myFavorites))
  }

  const handleExcludeFavorite = () => {
    setFavorite(false)
  }

  return (
    <>
    <Dialog onClose={() => handleClose() } aria-labelledby="simple-dialog-title" open={isOpen}>
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
        {!favorite ?
          <div onClick={() => handleFavorite()} style={{alignItems:'center'}}>
            <FavoriteBorderIcon />
            <p>Favorite Comic</p>
          </div>
          :
          <div onClick={() => handleExcludeFavorite()} style={{alignItems:'center'}}>
              <FavoriteIcon />
              <p>This comic is in favorites</p>
          </div>
        }
      </DialogBody>
    </Dialog>
    <Menu />
    <Containerbody>
      <ContainerbodyOpacity>
        <h1>Marvel Comics</h1>
        <p>Search and find the best comics!</p>
        <input 
          placeholder='Pesquisar por heroi'
          onChange={(e) => handleChange(e.target.value)}
        />
        <Grid 
          container spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {comicsRecover.map((item,index) => {
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
