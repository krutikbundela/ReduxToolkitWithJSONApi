import  { useState } from 'react'
import {Button,Box , TextField, Typography, Divider, Paper } from '@mui/material'
import {useSelector, useDispatch} from 'react-redux';
import { delPost, getAllPost, getPost } from '../redux/postSlice';
import Loading from './Loading';

const Post = () => {

    const [id, setId] = useState();

  const onChangeInput = (e) => {
    setId(e.target.value);
  };

const dispatch = useDispatch();

const {loading , post , edit , } = useSelector((state) => ({...state.post}))

  const fetchUserPost = () => {
    if (!id) {
      window.alert("Please enter id");
    } else {
        dispatch(getPost({id}));
      // dispatch(loadUserPostStart({ id }));
      setId("");
    }
  };

  return (

    <>
     <div className="container">
      <h1 style={{ textAlign: "center" }}>Fetch Post</h1>
     <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',

     }}>
     <TextField id="outlined-basic" label="Enter User Id" variant="outlined"
        type="number"
        onChange={onChangeInput}
        value={id}
      />
      <br />
      <br />
        <Box>
        <Button type="primary" ml={1} onClick={fetchUserPost}>
          Fetch User Post
        </Button>
        <Button type="primary" mr={1} onClick={() => dispatch(getAllPost())}>
          Get All Post
        </Button>
        </Box>
   
     </Box>
      <br />
      <br />
       {loading ? (
        <Loading count={1} />
      ) : (
        <>
          {post.length == 1 && (
            <div className="site-card-border-less-wrapper">
              <Paper elevation={8} sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',

              }}>
                
                <Typography m={1} pl={2} >{post[0].title}</Typography>
                <Divider />
                <Typography m={1} pl={2}>User Id: {post[0].id}</Typography>
                <Divider />
                {edit ? (
                  <>
                    
                    <Box sx={{
                      m:1, pr:2 ,pl:2,  
                    }}>
                    </Box>
                  
                    <Box
                      size="middle"
                      style={{
                        marginTop: 5,
                        marginLeft: 5,
                      }}
                    >
                      <Button type="primary">Save</Button>
                      <Button>Cancel</Button>
                    </Box>
                  </>
                ) : (
                  <Box sx={{
                    m:1, pr:2 ,pl:2,  
                  }}>
                  <Typography>{post[0].body}</Typography>
                  </Box>
                )}
              <Box
                size="middle"
                style={{
                  marginTop: 35,
                  marginLeft: 5,
                  float: "right",
                }}
                >
                <Button
                  style={{ cursor: "pointer" }}
                  type="primary"
                  disabled={edit}
                  danger="true"
                  onClick={() => dispatch(delPost({id: post[0].id}))}
                  >
                  Delete
                </Button>

                <Button type="primary">Edit </Button>
              </Box>
                  </Paper>
            </div>
          )}

          {/* Get All Post */}

        {post.length > 1 && post.map((post) =>{
            return (
              <>
                <div key={post.id} className="site-card-border-less-wrapper">
              <Paper elevation={8} sx={{
                m:3,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',

              }}>
                {/* <p>{index}</p> */}
                <Typography m={1} pl={2} >{post.title}</Typography>
                <Divider />
                <Typography m={1} pl={2}>User Id: {post.userId}</Typography>
                <Divider />
                {edit ? (
                  <>
                    
                    <Box sx={{
                      m:1, pr:2 ,pl:2,  
                    }}>
                    </Box>
                  
                    <Box
                      size="middle"
                      style={{
                        marginTop: 5,
                        marginLeft: 5,
                      }}
                    >
                      <Button type="primary">Save</Button>
                      <Button>Cancel</Button>
                    </Box>
                  </>
                ) : (
                  <Box sx={{
                    m:1, pr:2 ,pl:2,  
                  }}>
                  <Typography>{post.body}</Typography>
                  </Box>
                )}
              {/* <Box
                size="middle"
                style={{
                  marginTop: 35,
                  marginLeft: 5,
                  float: "right",
                }}
                >
                <Button
                  style={{ cursor: "pointer" }}
                  type="primary"
                  disabled={edit}
                  danger
                  onClick={() => dispatch(delPost({id: post[0].id}))}
                  >
                  Delete
                </Button>

                <Button type="primary">Edit </Button>
              </Box> */}
                  </Paper>
            </div>
              </>
            )
          })
       }

        </>
      )} 
    </div>
    </>
  )
}

export default Post